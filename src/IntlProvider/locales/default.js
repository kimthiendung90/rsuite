

const Calendar = {
  sunday: 'Su',
  monday: 'Mo',
  tuesday: 'Tu',
  wednesday: 'We',
  thursday: 'Th',
  friday: 'Fr',
  saturday: 'Sa',
  ok: 'OK',
  today: 'Today',
  yesterday: 'Yesterday',
  hours: 'Hours',
  minutes: 'Minutes',
  seconds: 'Seconds'
};

export default {
  Pagination: {
    more: 'More',
    prev: 'Previous',
    next: 'Next',
    first: 'First',
    last: 'Last'
  },
  Table: {
    emptyMessage: 'No data found',
    loading: 'Loading...'
  },
  TablePagination: {
    lengthMenuInfo: 'Show: {0} / page',
    totalInfo: 'Total: {0}'
  },
  DatePicker: {
    ...Calendar
  },
  DateRangePicker: {
    ...Calendar,
    last7Days: 'Last 7 Days',
  },
  Picker: {
    placeholder: 'Select',
    searchPlaceholder: 'Search'
  }
};
