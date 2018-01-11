import * as debug from '../utils/debug';
import { utils } from '../utils/utils';
import { Locale } from '../locale/locale';

// jQuery Components
import '../expandablearea/expandablearea.jquery';

// Component Name
const COMPONENT_NAME = 'compositeform';

/**
* @namespace
* @property {string} breakpoint  Defines the breakpoint at which the composite form will change
*  into its responsive mode
* @property {string} trigger  Expandable area trigger selector. Passed to expandable area.
* @property {string} expandedText  Text to use for the expand button (Default localized)
* @property {string} collapsedText  Text to use for the collapse button (Default localized)
*/
const COMPOSITEFORM_DEFAULTS = {
  breakpoint: 'phone-to-tablet',
  trigger: null,
  expandedText: Locale.translate('ShowLess'),
  collapsedText: Locale.translate('ShowMore'),
};

/**
 * *
 * CompositeForm is a specialized responsive form component.
 * @class CompositeForm
 * @param {string} element The component element.
 * @param {string} settings The component settings.
 */
function CompositeForm(element, settings) {
  this.settings = utils.mergeSettings(element, settings, COMPOSITEFORM_DEFAULTS);
  this.element = $(element);
  debug.logTimeStart(COMPONENT_NAME);
  this.init();
  debug.logTimeEnd(COMPONENT_NAME);
}

// Component API
CompositeForm.prototype = {

  /**
  * Initialize the component
  * @private
  * @returns {object} The component api for chaining.
  */
  init() {
    return this
      .build()
      .handleEvents();
  },

  /**
  * Adds markup to the control and stores references to some sub-elements
  * @private
  * @returns {object} The component api for chaining.
  */
  build() {
    const componentClassList = this.element[0].classList;
    if (!componentClassList.contains('composite-form')) {
      componentClassList.add('composite-form');
    }

    // Get expandable area reference, if applicable
    const expandableArea = this.element.find('.expandable-area');
    if (expandableArea.length) {
      this.hasSummary = true;
      this.expandableArea = expandableArea;
      this.expandableAreaAPI = this.expandableArea.data('expandablearea');
      if (!this.expandableAreaAPI) {
        this.expandableArea.expandablearea({ trigger: this.settings.trigger });
        this.expandableAreaAPI = this.expandableArea.data('expandablearea');
      }

      // Get expandable trigger
      this.expander = this.expandableAreaAPI.expander;
      this.setExpanderText(this.settings.expandedText);
    } else {
      this.hasSummary = false;
    }

    // Check size and append class, if necessary
    this.checkResponsive();

    return this;
  },

  /**
   * Sets up event handlers for this control and its sub-elements
   * @param {string} expanderText - the text content
   * @returns {undefined}
   */
  handleEvents() {
    const self = this;

    $('body').on(`resize.${COMPONENT_NAME}`, (e) => {
      self.checkResponsive(e);
    });

    this.element.on(`updated.${COMPONENT_NAME}`, () => {
      self.updated();
    });

    function changeExpanderText() {
      const isExpanded = self.expandableAreaAPI.isExpanded();
      self.setExpanderText(self.settings[isExpanded ? 'expandedText' : 'collapsedText']);
    }

    if (this.hasSummary) {
      this.expandableArea
        .on(`expand.${COMPONENT_NAME}`, changeExpanderText)
        .on(`collapse.${COMPONENT_NAME}`, changeExpanderText);
    }

    return this;
  },

  /**
   * Checks if we've passed the breakpoint for switching into Responsive mode.
   * @returns {undefined}
   */
  checkResponsive() {
    const cl = this.element[0].classList;

    if (Soho.breakpoints.isBelow(this.settings.breakpoint)) {
      cl.add('is-in-responsive-mode');
    } else {
      cl.remove('is-in-responsive-mode');
      if (this.isSideOriented() && !this.expandableAreaAPI.isExpanded()) {
        this.expandableAreaAPI.open();
      }
    }
  },

  /**
   * Sets the text content of the Composite Form's Expandable Area Expander.
   * @param {string} expanderText - the text content
   * @returns {undefined}
   */
  setExpanderText(expanderText) {
    if (!this.hasSummary) {
      return;
    }

    if (!(expanderText instanceof String) || !expanderText.length) {
      return;
    }

    let textSpan = this.expander.find('span');
    if (!textSpan) {
      textSpan = this.expander;
    }
    textSpan.text(expanderText);
  },

  /**
   * Determines if this component is configured for "on-side" orientation of the Summary area.
   * @returns {boolean} If the component is currently side oriented.
   */
  isSideOriented() {
    return this.element[0].classList.contains('on-side');
  },

  /**
   * Re-invokes the Composite Form
   * @returns {object} The component API for chaining.
   */
  updated() {
    return this
      .teardown()
      .init();
  },

  /**
   * Simple Teardown - remove events & rebuildable markup.
   * @private
   * @returns {object} The component API for chaining.
   */
  teardown() {
    $('body').off(`resize.${COMPONENT_NAME}`);
    this.element.off(`updated.${COMPONENT_NAME}`);

    if (this.hasSummary) {
      this.expandableArea.off(`expand.${COMPONENT_NAME} collapse.${COMPONENT_NAME}`);
    }

    return this;
  },

  /**
   * Destroys the component instance by removing it from its associated element.
   * @returns {object} The component API for chaining.
   */
  destroy() {
    this.teardown();
    $.removeData(this.element[0], COMPONENT_NAME);
  }
};

export { CompositeForm, COMPONENT_NAME };
