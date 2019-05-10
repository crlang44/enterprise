/* eslint-disable no-bitwise, no-undef */

// Get Latest from http://www.unicode.org/Public/cldr/25/
Soho.Locale.addCulture('ko-KR', {
  // layout/language
  language: 'ko',
  englishName: 'Korean (Korea)',
  nativeName: '한국어 (대한민국)',
  // layout/orientation/@characters
  direction: 'left-to-right',
  // ca-gregorian
  calendars: [{
    name: 'gregorian',
    // ca-gregorian/main/dates/calendars/gregorian/dateFormats/
    dateFormat: {
      separator: '. ', // Infered
      timeSeparator: ':',
      short: 'yyyy-MM-dd', // Uses custom format
      medium: 'yyyy-MM-dd',
      long: 'yyyy년 M월 d일',
      full: 'yyyy년 M월 d일 EEEE',
      month: 'M월 d일',
      year: 'yyyy년 M월',
      timestamp: 'a h:mm:ss',
      datetime: 'yyyy-MM-dd a h:mm',
      timezone: 'yyyy-MM-dd a h:mm zz',
      timezoneLong: 'yyyy-MM-dd a h:mm zzzz'
    }, // Infered short + short gregorian/dateTimeFormats
    // ca-gregorian/main/dates/calendars/gregorian/days/format/short or abbreviated (2 digit)
    days: {
      wide: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
      abbreviated: ['일', '월', '화', '수', '목', '금', '토'],
      narrow: ['일', '월', '화', '수', '목', '금', '토']
    },
    // ca-gregorian/main/dates/calendars/gregorian/months/format/wide
    months: {
      wide: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
      abbreviated: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
    },
    // ca-gregorian/main/dates/calendars/gregorian/timeFormats/short
    timeFormat: 'a h:mm',
    // ca-gregorian/main/dates/calendars/gregorian/dayPeriods/wide
    dayPeriods: ['오전', '오후']
  }],
  // numbers/currencyFormats-numberSystem-latn/standard
  currencySign: '₩',
  currencyFormat: '¤###',
  // numbers/symbols-numberSystem-latn
  numbers: {
    percentSign: '%',
    percentFormat: '### %',
    minusSign: '-',
    decimal: '.',
    group: ',',
    groupSizes: [3, 3]
  },
  // Resx - Provided By Translation Team
  messages: {
    AboutText: { id: 'AboutText', value: 'Copyright &copy; {0} Infor. All rights reserved. 여기에 명시된 용어와 디자인 마크는 Infor 및 해당 자회사 및/또는 계열사의 상표 및/또는 등록 상표입니다. All rights reserved. 여기에 나열된 모든 기타 상표는 각 소유주의 재산입니다.' },
    Actions: { id: 'Actions', value: '작업', comment: 'Tooltip text for the action button with additional in context actions' },
    AdditionalItems: { id: 'AdditionalItems', value: '추가 항목', comment: 'Button tooltip used in a list of movable items' },
    Add: { id: 'Add', value: '추가', comment: 'Add' },
    AddComments: { id: 'AddComments', value: '댓글 추가', comment: 'Add comments to a form of data' },
    AddNewTab: { id: 'AddNewTab', value: '새 탭 추가', comment: 'Attached to a button that adds new tabs' },
    AdministrativeLeave: { id: 'AdministrativeLeave', value: '관리를 위해 자리 비움', comment: 'As in vacation time from work' },
    AdvancedFilter: { id: 'AdvancedFilter', value: '고급 필터 만들기', comment: 'In a data grid active an advanced filtering feature' },
    Alert: { id: 'Alert', value: '경고', comment: 'Alert' },
    AlertOnPage: { id: 'AlertOnPage', value: '페이지에 경고 메시지 표시', comment: 'Alert message(s) on page n' },
    All: { id: 'All', value: '모두', comment: 'All items in the context of a filter' },
    AllResults: { id: 'AllResults', value: '다음에 대한 모든 결과', comment: 'Search Results Text' },
    AligntoBottom: { id: 'AligntoBottom', value: '아래쪽 정렬', comment: 'Align to Bottom tooltip' },
    AlignCenterHorizontally: { id: 'AlignCenterHorizontally', value: '가로 중앙 정렬', comment: 'Align Center Horizontally tooltip' },
    Amber: { id: 'Amber', value: '황색', comment: 'Color in our color pallette' },
    Amethyst: { id: 'Amethyst', value: '자주색', comment: 'Color in our color pallette' },
    Apply: { id: 'Apply', value: '적용', comment: 'Text in a button to apply an action' },
    AppMenuTriggerText: { id: 'AppMenuTriggerText', value: '메뉴', comment: 'Text in a special Module Tab used to trigger an Application Menu open or closed' },
    Attach: { id: 'Attach', value: '첨부', comment: 'Attach' },
    Available: { id: 'Available', value: '사용 가능', comment: 'Button tooltip used in a list of movable items' },
    Azure: { id: 'Azure', value: '담청색', comment: 'Color in our color pallette' },
    BackgroundColor: { id: 'BackgroundColor', value: '배경색', comment: 'add or edit text background color in the editor' },
    Between: { id: 'Between', value: '중간', comment: 'Between in icons for filtering' },
    Blockquote: { id: 'Blockquote', value: '인용 문단', comment: 'insert a block quote in the editor' },
    Bold: { id: 'Bold', value: '굵게', comment: 'Make text Bold' },
    Bookmarked: { id: 'Bookmarked', value: '책갈피 추가됨', comment: 'Bookmark filled - Element is already bookmarked' },
    BookmarkThis: { id: 'BookmarkThis', value: '책갈피에 추가', comment: 'Bookmark an element' },
    Breadcrumb: { id: 'Breadcrumb', value: '경로', comment: 'Text describing the Breadcrumb' },
    Browser: { id: 'Browser', value: '브라우저', comment: 'As in a Web Browser' },
    BulletedList: { id: 'BulletedList', value: '글머리 기호 목록', comment: 'Bulleted List tooltip' },
    Calendar: { id: 'Calendar', value: '달력', comment: 'Inline Text for the title of the Calendar control' },
    Camera: { id: 'Camera', value: '카메라', comment: 'Camera tooltip' },
    Cancel: { id: 'Cancel', value: '취소', comment: 'Cancel tooltip' },
    CapsLockOn: { id: 'CapsLockOn', value: 'Caps Lock 켜짐', comment: 'Caps Lock On message' },
    Cart: { id: 'Cart', value: '장바구니', comment: 'Cart tooltip' },
    CenterText: { id: 'CenterText', value: '가운데', comment: 'An Icon Tooltip' },
    CharactersLeft: { id: 'CharactersLeft', value: '남은 글자 수 {0}', comment: 'indicator showing how many more characters you can type.' },
    CharactersMax: { id: 'CharactersMax', value: '최대 글자 수 ', comment: 'indicator showing how many max characters you can type.' },
    ChangeSelection: { id: 'ChangeSelection', value: '. 선택 사항을 변경하려면 화살표를 이용하십시오.', comment: 'Audible Text for drop down list help' },
    ChangeView: { id: 'ChangeView', value: '변경 보기', comment: 'Change the current page from a list of options' },
    Checkbox: { id: 'Checkbox', value: '확인란', comment: 'Checkbox tooltip' },
    Checked: { id: 'Checked', value: '확인됨', comment: 'Checked tooltip' },
    Clear: { id: 'Clear', value: '지우기', comment: 'Tooltip for a Clear Action' },
    ClearFilter: { id: 'ClearFilter', value: '필터 지우기', comment: 'Clear the current filter criteria' },
    ClearFormatting: { id: 'ClearFormatting', value: '형식 지우기', comment: 'Clear the formatting in editor' },
    ClearSelection: { id: 'ClearSelection', value: '(선택 사항 지우기)', comment: 'clear dropdown selection' },
    Clock: { id: 'Clock', value: '시계', comment: 'Clock tooltip' },
    Close: { id: 'Close', value: '닫기', comment: 'Tooltip for a Close Button Action' },
    Clickable: { id: 'Clickable', value: '편집기에서 클릭 가능', comment: 'Clickable in editor' },
    Copy: { id: 'Copy', value: '복사', comment: 'Copy tooltip' },
    Collapse: { id: 'Collapse', value: '축소', comment: 'Collapse / close a tree/submenu' },
    CollapseAppTray: { id: 'CollapseAppTray', value: 'App 트레이 축소', comment: 'Collapse App Tray tooltip' },
    Columns: { id: 'Columns', value: '열', comment: 'Columns tooltip' },
    Comments: { id: 'Comments', value: '댓글', comment: 'Comments on an form' },
    CompanyHoliday: { id: 'CompanyHoliday', value: '회사 휴일', comment: 'A holiday provided by work.' },
    Component: { id: 'Component', value: '구성 요소', comment: 'As in a UI component - building block.' },
    Compose: { id: 'Compose', value: '작성', comment: 'Compose tooltip' },
    Completed: { id: 'Completed', value: '완료됨', comment: 'Text For a Completed Status' },
    Confirm: { id: 'Confirm', value: '확인', comment: 'Confirm tooltip' },
    ConfirmOnPage: { id: 'ConfirmOnPage', value: '페이지에서 경고 메시지 확인', comment: 'Confirm message(s) on page n' },
    CookiesEnabled: { id: 'CookiesEnabled', value: '쿠키 사용', comment: 'Returns if browser cookies are enabled or not.' },
    Contains: { id: 'Contains', value: '포함', comment: 'Contains in icons for filtering' },
    CssClass: { id: 'CssClass', value: 'CSS 클래스', comment: 'Label for entering a Css Class name' },
    Cut: { id: 'Cut', value: '잘라내기', comment: 'Cut tooltip' },
    Date: { id: 'Date', value: '날짜', comment: 'Describes filtering by a date data type' },
    Day: { id: 'Day', value: '일', comment: 'Shows view with day events' },
    Days: { id: 'Days', value: '일 ', comment: 'Show how many days until an event' },
    DaysOverdue: { id: 'DaysOverdue', value: '기한 {0}일 초과', comment: 'For a task /date UI' },
    DaysRemaining: { id: 'DaysRemaining', value: '남은 기간 {0}일', comment: 'For a task /date UI' },
    Delete: { id: 'Delete', value: '삭제', comment: 'Delete Toolbar Action Tooltip' },
    DeviceName: { id: 'Device', value: '기기', comment: 'Name of the Device' },
    DistributeHoriz: { id: 'DistributeHoriz', value: '가로 간격을 동일하게', comment: 'Icon button tooltip for action that distributes elements across Horizontally' },
    Document: { id: 'Document', value: '문서', comment: 'Document tooltip' },
    DiscretionaryTimeOff: { id: 'DiscretionaryTimeOff', value: '재량에 따른 휴가', comment: 'As in work time off' },
    Dirty: { id: 'Dirty', value: '행 변경됨', comment: 'Record is dirty / modified' },
    Drilldown: { id: 'Drilldown', value: '드릴다운', comment: 'Drill by moving page flow into a record' },
    Drillup: { id: 'Drillup', value: '드릴업', comment: 'Opposite of Drilldown, move back up to a larger set of records' },
    Dropdown: { id: 'Dropdown', value: '드롭다운', comment: 'Dropdown' },
    DoesNotContain: { id: 'DoesNotContain', value: '포함하지 않음', comment: 'Does Not Contain in icons for filtering' },
    DoesNotEndWith: { id: 'DoesNotEndWith', value: '제외할 끝 문자', comment: 'For condition filtering' },
    DoesNotEqual: { id: 'DoesNotEqual', value: '같지 않음', comment: 'Does Not Equal in icons for filtering' },
    DoesNotStartWith: { id: 'DoesNotStartWith', value: '제외할 시작 문자', comment: 'For condition filtering' },
    Down: { id: 'Down', value: '아래로', comment: 'Down tooltip' },
    Download: { id: 'Download', value: '다운로드', comment: 'Download tooltip' },
    Duplicate: { id: 'Duplicate', value: '복제', comment: 'Duplicate tooltip' },
    EitherSelectedOrNotSelected: { id: 'EitherSelectedOrNotSelected', value: '선택한 항목 또는 선택하지 않은 항목', comment: 'Either Selected Or NotSelected in icons for filtering' },
    EndsWith: { id: 'EndsWith', value: '끝나는 값', comment: 'for condition filtering' },
    EnterComments: { id: 'EnterComments', value: '여기에 댓글 입력...', comment: 'Placeholder text for a text input (comments)' },
    Error: { id: 'Error', value: '오류', comment: 'Title, Spoken Text describing fact an error has occured' },
    ErrorAllowedTypes: { id: 'ErrorAllowedTypes', value: '파일 형식이 허용되지 않음', comment: 'Error string for file-upload' },
    ErrorMaxFileSize: { id: 'ErrorMaxFileSize', value: '파일 크기 제한 초과', comment: 'Error string for file-upload' },
    ErrorMaxFilesInProcess: { id: 'ErrorMaxFilesInProcess', value: '허용되는 최대 파일 제한 초과', comment: 'Error string for file-upload' },
    ErrorOnPage: { id: 'ErrorOnPage', value: '페이지에 오류 메시지 표시', comment: 'Error message(s) on page n' },
    EmailValidation: { id: 'EmailValidation', value: '올바르지 않은 메일 주소', comment: 'This the rule for email validation' },
    Emerald: { id: 'Emerald', value: '에메랄드', comment: 'Color in our color pallette' },
    Expand: { id: 'Expand', value: '확장', comment: 'Expand open a tree/submenu' },
    ExpandAppTray: { id: 'ExpandAppTray', value: 'App 트레이 확장', comment: 'ExpandAppTray tooltip' },
    ExpandCollapse: { id: 'ExpandCollapse', value: '확장 / 축소', comment: 'Text to toggle a button in a container.' },
    ExportAsSpreadsheet: { id: 'ExportAsSpreadsheet', value: '스프레드시트로 내보내기', comment: 'Export as Spreadsheet tooltip' },
    Edit: { id: 'Edit', value: '편집', comment: 'Edit tooltip' },
    Equals: { id: 'Equals', value: '같음', comment: 'Equals in icons for filtering' },
    Event: { id: 'Event', value: '이벤트', comment: 'As in an event that would be in a calendar' },
    ExitFullView: { id: 'ExitFullView', value: '전체 화면 보기 종료', comment: 'Exit Full View tooltip' },
    Export: { id: 'Export', value: '내보내기', comment: 'Export tooltip' },
    ExportToExcel: { id: 'ExportToExcel', value: 'Excel로 내보내기', comment: 'Export To Excel menu option in datagrid' },
    Favorite: { id: 'Favorite', value: '즐겨찾기', comment: 'A favorite item' },
    FileUpload: { id: 'FileUpload', value: '파일 업로드. 파일을 찾으려면 Enter를 누르세요.', comment: 'Screen Reader instructions' },
    FieldFilter: { id: 'FieldFilter', value: '필드 필터', comment: 'Used for Field Filter' },
    Filter: { id: 'Filter', value: '필터', comment: 'Filter tooltip' },
    FirstPage: { id: 'FirstPage', value: '첫 번째 페이지', comment: 'First Page tooltip' },
    Folder: { id: 'Folder', value: '폴더', comment: 'Folder tooltip' },
    From: { id: 'From', value: '시작', comment: 'Start of a range (of dates)' },
    FullView: { id: 'FullView', value: '전체 화면 보기', comment: 'Full View tooltip' },
    GoForward: { id: 'GoForward', value: '앞으로 이동', comment: 'Move Page / object this direction' },
    GoBack: { id: 'GoBack', value: '돌아가기', comment: 'Move Page / object this directionp' },
    GoDown: { id: 'GoDown', value: '아래로 이동', comment: 'Move Page / object this directionp' },
    GoUp: { id: 'GoUp', value: '위로 이동', comment: 'Move Page / object this direction' },
    Go: { id: 'Go', value: '이동', comment: 'Go, perform a movement, start a search, move to the next "thing" in a workflow.' },
    Graphite: { id: 'Graphite', value: '흑연색', comment: 'Color in our color pallette' },
    GreaterOrEquals: { id: 'GreaterOrEquals', value: '크거나 같음', comment: 'Greater Than Or Equals in icons for filtering' },
    GreaterThan: { id: 'GreaterThan', value: '다음 값보다 큼', comment: 'Greater Than in icons for filtering' },
    Grid: { id: 'Grid', value: '눈금', comment: 'Grid tooltip' },
    Hour: { id: 'Hour', value: '시간', comment: 'the hour portion of a time' },
    Hours: { id: 'Hours', value: '시간', comment: 'the hour portion of a time (plural)' },
    HeadingThree: { id: 'HeadingThree', value: '헤딩 3', comment: 'Heading Three tooltip' },
    HeadingFour: { id: 'HeadingFour', value: '헤딩 4', comment: 'Heading Four tooltip' },
    Highest: { id: 'Highest', value: '최고값', comment: 'Highest Four tooltip' },
    Home: { id: 'Home', value: '홈', comment: 'Home tooltip' },
    HtmlView: { id: 'HtmlView', value: 'Html 보기', comment: 'Html View tooltip' },
    Image: { id: 'Image', value: '이미지', comment: 'Image of something' },
    Import: { id: 'Import', value: '가져오기', comment: 'Import tooltip' },
    Info: { id: 'Info', value: '정보', comment: 'Info tooltip' },
    InfoOnPage: { id: 'InfoOnPage', value: '페이지에서 정보 메시지 표시', comment: 'Information message(s) on page n' },
    InProgress: { id: 'In Progress', value: '진행 중', comment: 'Info tooltip that an action is in progress' },
    Insert: { id: 'Insert', value: '삽입', comment: 'Insert Modal Dialog Button' },
    InsertAnchor: { id: 'InsertAnchor', value: '기준 위치 삽입', comment: 'Insert Acnhor (link) in an editor' },
    InsertImage: { id: 'InsertImage', value: '이미지 삽입', comment: 'Insert Image in an editor' },
    InsertLink: { id: 'InsertLink', value: '링크 삽입', comment: 'Insert Link in an editor' },
    InsertUrl: { id: 'InsertUrl', value: 'URL 삽입', comment: 'Insert a Url in an editor' },
    Italic: { id: 'Italic', value: '기울임꼴', comment: 'Make Text Italic' },
    InvalidDate: { id: 'InvalidDate', value: '잘못된 날짜', comment: 'validation message for wrong date format (short)' },
    InvalidTime: { id: 'InvalidTime', value: '잘못된 시간', comment: 'validation message for wrong time format' },
    Inventory: { id: 'Inventory', value: '재고', comment: 'Icon button tooltop for Inventory Action' },
    InRange: { id: 'InRange', value: '범위 내', comment: 'In Range in icons for filtering' },
    IsEmpty: { id: 'IsEmpty', value: '비어 있음', comment: 'Is Empty in icons for filtering' },
    IsNotEmpty: { id: 'IsNotEmpty', value: '비어 있지 않음', comment: 'Is Not Empty in icons for filtering' },
    ItemsSelected: { id: 'ItemsSelected', value: '선택한 항목', comment: 'Num of Items selected for swaplist' },
    JustifyCenter: { id: 'JustifyCenter', value: '가운데', comment: 'justify text to center in the editor' },
    JustifyLeft: { id: 'JustifyLeft', value: '왼쪽 정렬', comment: 'justify text to left in the editor' },
    JustifyRight: { id: 'JustifyRight', value: '오른쪽 정렬', comment: 'justify text to right in the editor' },
    Keyword: { id: 'Keyword', value: '키워드', comment: 'Describes filtering by a keyword search' },
    Launch: { id: 'Launch', value: '실행', comment: 'Launch' },
    LastPage: { id: 'LastPage', value: '최종 페이지', comment: 'Last Page tooltip' },
    Left: { id: 'Left', value: '왼쪽', comment: 'Left tooltip' },
    Legend: { id: 'Legend', value: '범례', comment: 'As in a chart legend' },
    LessOrEquals: { id: 'LessOrEquals', value: '작거나 같음', comment: 'Less Than Or Equals in icons for filtering' },
    LessThan: { id: 'LessThan', value: '보다 작음', comment: 'Less Than in icons for filtering' },
    Link: { id: 'Link', value: '링크', comment: 'Link - as in hyperlink - icon tooltop' },
    Load: { id: 'Load', value: '로드', comment: 'Load icon tooltip' },
    Loading: { id: 'Loading', value: '로드하는 중', comment: 'Text below spinning indicator to indicate loading' },
    Locale: { id: 'Locale', value: '로캘', comment: 'The users locale string for example en-US, it-It' },
    Locked: { id: 'Locked', value: '잠김', comment: 'Locked tooltip' },
    Logout: { id: 'Logout', value: '로그아웃', comment: 'Log out of the application' },
    Lookup: { id: 'Lookup', value: '조회', comment: 'Lookup - As in looking up a record or value' },
    Lowest: { id: 'Lowest', value: '최저값', comment: 'Lowest - As in Lowest value' },
    Mail: { id: 'Mail', value: '메일', comment: 'Mail tooltip' },
    MapPin: { id: 'MapPin', value: '고정', comment: 'Map Pin tooltip' },
    Maximize: { id: 'Maximize', value: '최대화', comment: 'Maximize a screen or dialog in the UI' },
    Median: { id: 'Median', value: '중간값', comment: 'Median in Mathematics' },
    Medium: { id: 'Medium', value: '중간', comment: 'Describes a Medium sized Row Height in a grid/list' },
    Menu: { id: 'Menu', value: '메뉴', comment: 'Menu tooltip' },
    MingleShare: { id: 'MingleShare', value: 'Ming.le로 공유', comment: 'Share the contextual object/action in the mingle system' },
    Minutes: { id: 'Minutes', value: '분', comment: 'the minutes portion of a time' },
    Minimize: { id: 'Minimize', value: '최소화', comment: 'Minimize tooltip' },
    Minus: { id: 'Minus', value: '빼기', comment: 'Minus tooltip' },
    Mobile: { id: 'Mobile', value: '모바일', comment: 'Indicates a mobile device (phone tablet ect)' },
    Month: { id: 'Month', value: '월', comment: 'As in a date month' },
    More: { id: 'More', value: '추가...', comment: 'Text Indicating More Buttons or form content' },
    MoreActions: { id: 'MoreActions', value: '추가 조치', comment: 'Text on the More Actions button indictating hidden functions' },
    MoveToLeft: { id: 'MoveToLeft', value: '왼쪽으로 이동', comment: 'Button tooltip used in a list of movable items' },
    MoveToRight: { id: 'MoveToRight', value: '오른쪽으로 이동', comment: 'Button tooltip used in a list of movable items' },
    MsgDirty: { id: 'MsgDirty', value: ', 수정됨', comment: 'for modified form fields' },
    New: { id: 'New', value: '새로 만들기', comment: 'Add new rowstatus in datagrid' },
    NewDocument: { id: 'NewDocument', value: '새 문서', comment: 'New Document tooltip' },
    NewItem: { id: 'NewItem', value: '새 항목', comment: 'New item in listbuilder' },
    NewWindow: { id: 'NewWindow', value: '새 창', comment: 'Contents open in a new browser window.' },
    Next: { id: 'Next', value: '다음', comment: 'Next in icons tooltip' },
    NextPage: { id: 'NextPage', value: '다음 페이지', comment: 'Next on Pager' },
    NextMonth: { id: 'NextMonth', value: '다음 달', comment: 'the label for the button that moves calendar to next/prev' },
    No: { id: 'No', value: '아니요', comment: 'On a dialog button' },
    NoData: { id: 'NoData', value: '사용 가능한 데이터 없음', comment: 'Shown when there is no rows shown in a list' },
    NoDataFilter: { id: 'NoDataFilter', value: '사용 가능한 데이타가 없습니다. 더 많은 결과를 보려면 새로운 필터를 선택하십시오.', comment: 'Shown when there is no rows shown in a list' },
    NoDataList: { id: 'NoDataList', value: '사용 가능한 데이타가 없습니다. 더 많은 결과를 보려면 목록에서 선택하십시오.', comment: 'Shown when there is no rows shown in a list' },
    None: { id: 'None', value: '없음', comment: 'None to pick clear color' },
    NoResults: { id: 'NoResults', value: '결과 없음', comment: 'Search Results Text' },
    Normal: { id: 'Normal', value: '보통', comment: 'Normal row height' },
    Notes: { id: 'Notes', value: '참고', comment: 'Notes icon tooltip' },
    NotSelected: { id: 'NotSelected', value: '선택되지 않음', comment: 'Not Selected in icons for filtering' },
    NumberList: { id: 'NumberList', value: '숫자 목록', comment: 'Number List tooltip' },
    Ok: { id: 'Ok', value: '확인', comment: 'Ok button on a dialog' },
    OpenBackClose: { id: 'OpenBackClose', value: '열기 / 뒤로 / 닫기', comment: 'Open / Back / Close tooltip' },
    OpenClose: { id: 'OpenClose', value: '열기 / 닫기', comment: 'Open / Close tooltip' },
    OperatingSystem: { id: 'OperatingSystem', value: '운영 체제', comment: 'Device Operating System' },
    OrderedList: { id: 'OrderedList', value: '번호 매기기 목록 삽입/제거', comment: 'Insert an Ordered list in the editor' },
    Page: { id: 'Page', value: '페이지 ', comment: 'Text on the pager links' },
    PageOf: { id: 'PageOf', value: '{0}/{1}페이지', comment: 'Pager Text Showing current and number of pages' },
    PageOn: { id: 'PageOn', value: '현재 페이지 ', comment: 'Text on the pager links' },
    PaidTimeOff: { id: 'PaidTimeOff', value: '유급 휴가', comment: 'As in vacation from work' },
    Paste: { id: 'Paste', value: '붙여넣기', comment: 'Paste icon tooltip' },
    PasswordValidation: { id: 'PasswordValidation', value: '<strong>암호는 다음 요건을 충족해야 함</strong><br>최소 10자<br>적어도 하나의 대문자 포함<br>적어도 하나의 소문자 포함<br>하나의 특수 문자 포함<br>사용자 이름은 포함할 수 없음<br>이전에 사용한 암호는 설정할 수 없음<br>', comment: 'Password validation requirements' },
    PasswordConfirmValidation: { id: 'PasswordConfirmValidation', value: '암호가 일치해야 합니다.', comment: 'Password Confirm validation' },
    Peak: { id: 'Peak', value: '최고점', comment: 'the max or peak value in a chart' },
    Pending: { id: 'Pending', value: '보류 중', comment: 'An event or task is pending' },
    PersonalizeColumns: { id: 'PersonalizeColumns', value: '열 개인 설정', comment: 'Customize Columns in a Grid' },
    Plan: { id: 'Plan', value: '계획', comment: 'As in type of vacation plan' },
    Platform: { id: 'Platform', value: '플랫폼', comment: 'The users operating system i.e. mac, windows' },
    Period: { id: 'Period', value: '기간', comment: 'the am/pm portion of a time' },
    PressDown: { id: 'PressDown', value: '날짜를 선택하려면 아래쪽 화살표를 누르십시오.', comment: 'the audible label for Tooltip about how to operate the date picker' },
    PressShiftF10: { id: 'PressShiftF10', value: '컨텍스트 메뉴를 열려면 Shift+F10을 누르십시오.', comment: 'the audible infor for screen readers on how to use a field with a popup menu' },
    Previous: { id: 'Previous', value: '이전', comment: 'Previous icon tooltip - moved to previous record' },
    PreviousMonth: { id: 'PreviousMonth', value: '지난달', comment: 'the label for the button that moves calendar to next/prev' },
    PreviousPage: { id: 'PreviousPage', value: '이전 페이지', comment: 'Previous Page tooltip' },
    Print: { id: 'Print', value: '인쇄', comment: 'Print tooltip' },
    Range: { id: 'Range', value: '범위', comment: 'Range for tooltip' },
    RecordsPerPage: { id: 'RecordsPerPage', value: '페이지당 {0}개의 레코드', comment: 'Dropdown allows the user to select how many visible records {} shows select value.' },
    Redo: { id: 'Redo', value: '다시 실행', comment: 'Redo tooltip' },
    ReorderRows: { id: 'ReorderRows', value: '행 순서 다시 지정', comment: 'Drag and Reorder Grid Rows' },
    Refresh: { id: 'Refresh', value: '새로 고침', comment: 'Refresh tooltip' },
    RequestTimeOff: { id: 'RequestTimeOff', value: '휴가 요청', comment: 'Making a request for time off work.' },
    Required: { id: 'Required', value: '필수', comment: 'indicates a form field is manditory' },
    Reset: { id: 'Reset', value: '다시 설정', comment: 'Reset tooltip' },
    ResetDefault: { id: 'ResetDefault', value: '기본값으로 다시 설정', comment: 'Reset Datagrid Columns, Filter and other Layout' },
    Result: { id: 'Result', value: '결과', comment: 'Showing a single result in a List' },
    Results: { id: 'Results', value: '결과', comment: 'As in showing N Results (plural) in a List' },
    RightAlign: { id: 'RightAlign', value: '오른쪽 정렬', comment: 'Right Align tooltip' },
    RightAlignText: { id: 'RightAlignText', value: '오른쪽 정렬', comment: 'Right Align Text tooltip' },
    Right: { id: 'Right', value: '오른쪽', comment: 'Right' },
    Roles: { id: 'Roles', value: '역할', comment: 'Roles tooltip' },
    RowHeight: { id: 'RowHeight', value: '행 높이', comment: 'Describes the Height for Rows in a Data Grid' },
    Ruby: { id: 'Ruby', value: '루비색', comment: 'Color in our color pallette' },
    RunFilter: { id: 'RunFilter', value: '필터 실행', comment: 'Execute the current filter criteria' },
    SameWindow: { id: 'SameWindow', value: '동일한 창', comment: 'Contents open in the same browser window.' },
    Save: { id: 'Save', value: '저장', comment: 'Save tooltip' },
    SaveCurrentView: { id: 'SaveCurrentView', value: '현재 보기 저장', comment: 'Datagrids contain view sets. This menu option saves them' },
    SavedViews: { id: 'SavedViews', value: '저장된 보기', comment: 'Label for a list of Views' },
    Schedule: { id: 'Schedule', value: '일정', comment: 'Shows a schedule view' },
    Seconds: { id: 'Seconds', value: '초', comment: 'the seconds portion of a time' },
    Search: { id: 'Search', value: '검색', comment: 'Search tooltip' },
    SearchColumnName: { id: 'SearchColumnName', value: '열 이름 검색', comment: 'Search for a datagrid column by name' },
    SearchFolder: { id: 'SearchFolder', value: '폴더 검색', comment: 'Search Folder tooltip' },
    SearchList: { id: 'SearchList', value: '목록 검색', comment: 'Search List tooltip' },
    Select: { id: 'Select', value: '선택', comment: 'text describing a select action' },
    SelectDay: { id: 'SelectDay', value: '날짜 선택', comment: 'Select a day in the calendar picker' },
    Selected: { id: 'Selected', value: '선택됨', comment: 'text describing a selected object' },
    SelectAll: { id: 'SelectAll', value: '모두 선택', comment: 'describes the action of selecting all items available in a list' },
    Send: { id: 'Send', value: '보내기', comment: 'Send tooltip' },
    SetTime: { id: 'SetTime', value: '시간 설정', comment: 'button text that inserts time when clicked' },
    Settings: { id: 'Settings', value: '설정', comment: 'Settings tooltip' },
    Short: { id: 'Short', value: '짧게', comment: 'Describes a Shorted Row Height in a grid/list' },
    ShowFilterRow: { id: 'ShowFilterRow', value: '필터 행 표시', comment: 'Toggle a row with filer info above a list' },
    ShowLess: { id: 'ShowLess', value: '간단히 표시', comment: 'Show less form content' },
    ShowMore: { id: 'ShowMore', value: '자세히 표시', comment: 'Show more form content' },
    SickTime: { id: 'SickTime', value: '병가', comment: 'Time off sick from work' },
    Slate: { id: 'Slate', value: '슬레이트', comment: 'Color in our color pallette' },
    SlideOf: { id: 'SlideOf', value: '슬라이드 {0}/{1}', comment: 'Slide Text Showing current and total number of slides' },
    SlidesOf: { id: 'SlidesOf', value: '슬라이드 {0} 및 {1}/{2}', comment: 'Slides Text Showing current slides and total number of slides' },
    SliderHandle: { id: 'SliderHandle', value: '처리 대상', comment: 'Description of the portion of a Slider control that is focusable and changes its value, followed in code by the name of the control' },
    SliderMaximumHandle: { id: 'SliderMaximumHandle', value: '최대 범위 처리', comment: 'Describes a maximum value handle in a Range (double slider), followed in code by the name of the control' },
    SliderMinimumHandle: { id: 'SliderMinimumHandle', value: '최소 범위 처리', comment: 'Describes a minimum value handle in a Range (double slider), followed in code by the name of the control' },
    SkipToMain: { id: 'SkipToMain', value: '기본 콘텐츠로 건너뛰기', comment: 'Skip link in header, jumps when clicked on to main area' },
    Status: { id: 'Status', value: '상태', comment: 'Status of someting thats submitted fx in progress, approved' },
    StartsWith: { id: 'StartsWith', value: '시작 문자', comment: 'for condition filtering' },
    StepsCompleted: { id: 'StepsCompleted', value: '{0}/{1}단계 완료됨', comment: 'steps of a wizard/chart' },
    StrikeThrough: { id: 'StrikeThrough', value: '취소선', comment: 'turn on and off strike through text in text editor (like word)' },
    SortAtoZ: { id: 'SortAtoZ', value: '오름차순 정렬', comment: 'Sort A to Z in icons for filtering' },
    SortZtoA: { id: 'SortZtoA', value: '내림차순 정렬', comment: 'Sort Z to A in icons for filtering' },
    SortDown: { id: 'SortDown', value: '아래로 정렬', comment: 'Sort Down tooltip' },
    SortUp: { id: 'SortUp', value: '위로 정렬', comment: 'Sort Up tooltip' },
    Subscript: { id: 'Subscript', value: '아래 첨자', comment: 'Turn on and off Subscript text in text editor (like word)' },
    Superscript: { id: 'Superscript', value: '위 첨자', comment: 'Turn on and off Superscript text in text editor (like word)' },
    Tabs: { id: 'Tabs', value: '탭...', comment: 'Used in the Tabs Control\'s more menu, preceeded by a number that describes how many tabs are in the spillover menu' },
    Tack: { id: 'Tack', value: '고정', comment: 'Pin an object' },
    Tall: { id: 'Tall', value: '길게', comment: 'Describes a Taller Row Height in a grid/list' },
    Target: { id: 'Target', value: '대상', comment: 'Label for an input to enter a Target (Url Attribute)' },
    TeamEvent: { id: 'TeamEvent', value: '팀 이벤트', comment: 'Having an event with a work team' },
    TestLocaleDefaults: { id: 'TestLocaleDefaults', value: 'Test Locale Defaults', comment: 'Do not translate' },
    TextColor: { id: 'TextColor', value: '텍스트 색상', comment: 'add or edit text color in the editor' },
    TextDropArea: { id: 'DropArea', value: '업로드할 파일을 끌어다 놓으십시오.', comment: 'text for drop area for advanced fileupload' },
    TextDropAreaWithBrowse: { id: 'TextDropAreaWithBrowse', value: '업로드할 <span class="hyperlink">파일을 선택</span>하거나 끌어다 놓으십시오.', comment: 'text for drop area with browse for advanced fileupload' },
    TextBtnCancel: { id: 'TextBtnCancel', value: '이 파일 업로드 취소', comment: 'text for cancel button for advanced fileupload' },
    TextBtnCloseError: { id: 'TextBtnCloseError', value: '이 오류 닫기', comment: 'text for error close button for advanced fileupload' },
    TextBtnRemove: { id: 'TextBtnRemove', value: '이 오류 닫기', comment: 'text for remove button for advanced fileupload' },
    Timer: { id: 'Timer', value: '타이머', comment: 'Timer tooltip' },
    To: { id: 'To', value: '종료', comment: 'End of a range (of dates)' },
    Today: { id: 'Today', value: '오늘', comment: 'refering to today on a calendar' },
    ToggleBold: { id: 'ToggleBold', value: '텍스트 굵게 켜기/끄기', comment: 'turn on and off bold in text editor (like word)' },
    ToggleH3: { id: 'ToggleH3', value: '헤딩 3 켜기/끄기', comment: 'turn on and off heading 3 text' },
    ToggleH4: { id: 'ToggleH4', value: '헤딩 4 켜기/끄기', comment: 'turn on and off heading 4 text' },
    ToggleItalic: { id: 'ToggleItalic', value: '텍스트 기울임꼴 켜기/끄기', comment: 'turn on and off Italic in text editor (like word)' },
    ToggleUnderline: { id: 'ToggleUnderline', value: '텍스트 밑줄 켜기/끄기', comment: 'turn on and off Underline in text editor (like word)' },
    Toolbar: { id: 'Toolbar', value: '도구 모음', comment: 'describing the toolbar component' },
    TopAlign: { id: 'TopAlign', value: '위쪽 정렬', comment: 'Top Align tooltip' },
    Total: { id: 'Total', value: '총계', comment: 'Mathematic total of a calculation' },
    Totals: { id: 'Totals', value: '총계', comment: 'Mathematic total of a calculation (plural)' },
    TreeCollapse: { id: 'TreeCollapse', value: '트리 축소', comment: 'Tree Collapse tooltip' },
    TreeExpand: { id: 'TreeExpand', value: '트리 확장', comment: 'Tree Expand tooltip' },
    Turquoise: { id: 'Turquoise', value: '옥색', comment: 'Color in our color pallette' },
    Up: { id: 'Up', value: '위로', comment: 'Up tooltip' },
    UpComingEvents: { id: 'UpComingEvent', value: '다가오는 이벤트', comment: 'List of upcoming calendar events' },
    UpComingTimeOff: { id: 'UpComingTimeOff', value: '다가오는 휴가', comment: 'As in time off work' },
    Upload: { id: 'Upload', value: '업로드', comment: 'Upload tooltip' },
    UnavailableDate: { id: 'UnavailableDate', value: '사용할 수 없는 날짜', comment: 'Unavailable Date Text' },
    Underline: { id: 'Underline', value: '밑줄', comment: 'Make text Underlined' },
    Undo: { id: 'Undo', value: '실행 취소', comment: 'Undo tooltip' },
    Unlocked: { id: 'Unlocked', value: '잠금 해제', comment: 'Unlocked tooltip' },
    UnorderedList: { id: 'UnorderedList', value: '글머리 기호 목록 삽입/제거', comment: 'Insert an Unordered list in the editor' },
    Unsupported: { id: 'Unsupported', value: '이 콘텐츠는 사용자의 현재 브라우저 버전에서 지원되지 않는 기능을 이용하기 때문에 사용할 수 없습니다.', comment: 'Suggesting browser upgrade for missing features.' },
    Url: { id: 'Url', value: 'URL', comment: 'Url tooltip' },
    UseArrow: { id: 'UseArrow', value: '. 화살표를 사용하여 선택합니다.', comment: 'Instructional comments for screen readers' },
    UseEnter: { id: 'UseEnter', value: '. Enter 키나 아래 화살표를 사용하여 조회합니다.', comment: 'Instructional comments for screen readers' },
    User: { id: 'User', value: '사용자', comment: 'User tooltip' },
    UserProfile: { id: 'UserProfile', value: '사용자 프로필', comment: 'User Profile tooltip' },
    Version: { id: 'Version', value: 'IDS 버전', comment: 'Version of IDS' },
    VerticalMiddleAlign: { id: 'VerticalMiddleAlign', value: '세로 중앙 정렬', comment: 'Vertical Align tooltip' },
    ViewSource: { id: 'ViewSource', value: '소스 보기', comment: 'Toggle the source view in the editor' },
    ViewVisual: { id: 'ViewVisual', value: '결과 보기', comment: 'Toggle the visual view in the editor' },
    Week: { id: 'Week', value: '주', comment: 'Shows a view of the current weeks events' },
    Year: { id: 'Year', value: '년', comment: 'As in a date year' },
    Yes: { id: 'Yes', value: '예', comment: 'On a dialog button' }
  }
});
