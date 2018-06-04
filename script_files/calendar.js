function initializeCalendar(){
// page is now ready, initialize the calendar...
            
$('#calendar').fullCalendar({
    // put your options and callbacks here
        header: {
            left: '',
            center: 'title',
            right: 'agendaDay,agendaWeek,month prev,next today'
        },
        buttonText:{
            today:  'hoy',
            month:  'mes',
            week:   'semana',
            day:    'día'
        },
        height: 'auto',
        themeSystem: 'bootstrap4',
        locale: 'es',
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
        dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Dic'],
        showNonCurrentDates: false,
        fixedWeekCount : false,
        eventLimit: 4,
        timeFormat: 'HH:mm',
        navLinks: true,
        defaultDate: '2018-06-01',
        eventClick: function(eventObj) {
            if (eventObj.url) {
                window.open(eventObj.url);
                return false; // prevents browser from following link in current tab.
            } 
        },
        eventRender: function(eventObj, $el) {
            $el.popover(
                {
                    html: true,
                    title: '#01 - ' + eventObj.extendedTitle,
                    content: '<div class="container">' +
                             '<i class="fas fa-table"></i>&nbsp&nbspGrupo A<br/>' +
                             '<i class="fas fa-thumbtack"></i>&nbsp&nbsp&nbspMonumental, Moscú<br/>' +
                             '<i class="fas fa-users"></i>&nbsp&nbsp74,738 / 74,738<br/>' +
                             '<i class="fas fa-sun"></i>&nbsp&nbspSoleado - <i class="fas fa-thermometer"></i>&nbsp&nbsp23 °C - <i class="fas fa-tint"></i>&nbsp&nbsp65%<br/>' +
                             '</div>',
                    trigger: 'hover',
                    placement: 'top',
                    container: 'body'
                }
            );
        },
        events: 
        [
            {
              title: '',
              extendedTitle: '',
              start: '2018-06-14',
              end  : '2018-07-16',
              rendering: 'background'
            },
            {
              title: '',
              extendedTitle: '',
              start: '2018-06-14',
              end  : '2018-06-29',
              rendering: 'background',
              backgroundColor: 'orange'
            },
            {
              title: '',
              extendedTitle: '',
              start: '2018-06-30',
              end  : '2018-07-04',
              rendering: 'background',
              backgroundColor: 'gray'
            },
            {
              title: '',
              extendedTitle: '',
              start: '2018-07-06',
              end  : '2018-07-08',
              rendering: 'background'
            },
            {
              title: '',
              extendedTitle: '',
              start: '2018-07-10',
              end  : '2018-07-12',
              rendering: 'background'
            },
            {
              id: 1,
              title: 'RUS - ASA',
              extendedTitle: 'RUSIA - : - ARABIA',
              start: '2018-06-14T10:00',
              end  : '2018-06-14T12:00',
              url:'match.html'
            },
            {
                id: 2,
                title: 'EGI - URU',
                extendedTitle: 'EGIPTO - : - URUGUAY',
                start: '2018-06-15T07:00',
                end  : '2018-06-15T09:00'
            },
            {
                id: 3,
                title: 'MAR - IRA',
                extendedTitle: '',
                start: '2018-06-15T10:00',
                end  : '2018-06-15T12:00'
            },
            {
                id: 4,
                title: 'POR - ESP',
                extendedTitle: '',
                start: '2018-06-15T13:00',
                end  : '2018-06-15T15:00'
            },
            {
                id: 5,
                title: 'FRA - AUS',
                extendedTitle: '',
                start: '2018-06-16T05:00',
                end  : '2018-06-16T07:00'
            },
            {
                id: 6,
                title: 'ARG - ISL',
                extendedTitle: '',
                start: '2018-06-16T08:00',
                end  : '2018-06-16T10:00'
            },
            {
                id: 7,
                title: 'PER - DIN',
                extendedTitle: '',
                start: '2018-06-16T11:00',
                end  : '2018-06-16T13:00'
            },
            {
                id: 8,
                title: 'CRO - NIG',
                extendedTitle: '',
                start: '2018-06-16T14:00',
                end  : '2018-06-16T15:00'
            },
            {
                id: 9,
                title: 'COS - SER',
                extendedTitle: '',
                start: '2018-06-17T07:00',
                end  : '2018-06-17T09:00'
            },
            {
                id: 10,
                title: 'ALE - MEX',
                extendedTitle: '',
                start: '2018-06-17T10:00',
                end  : '2018-06-17T12:00'
            },
            {
                id: 11,
                title: 'BRA - SUI',
                extendedTitle: '',
                start: '2018-06-17T13:00',
                end  : '2018-06-17T15:00'
            },
            {
                id: 12,
                title: 'SUE - COR',
                extendedTitle: '',
                start: '2018-06-18T07:00',
                end  : '2018-06-18T09:00'
            },
            {
                id: 13,
                title: 'BEL - PAN',
                extendedTitle: '',
                start: '2018-06-18T10:00',
                end  : '2018-06-18T12:00'
            },
            {
                id: 14,
                title: 'TUN - ING',
                extendedTitle: '',
                start: '2018-06-18T13:00',
                end  : '2018-06-18T15:00'
            },
            {
                id: 15,
                title: 'COL - JAP',
                extendedTitle: '',
                start: '2018-06-19T07:00',
                end  : '2018-06-19T09:00'
            },
            {
                id: 16,
                title: 'POL - SEN',
                extendedTitle: '',
                start: '2018-06-19T10:00',
                end  : '2018-06-19T12:00'
            },
            {
                id: 17,
                title: 'RUS - EGI',
                extendedTitle: '',
                start: '2018-06-19T13:00',
                end  : '2018-06-19T15:00'
            },
            {
                id: 18,
                title: 'POR - MAR',
                extendedTitle: '',
                start: '2018-06-20T07:00',
                end  : '2018-06-20T09:00'
            },
            {
                id: 18,
                title: 'POR - MAR',
                extendedTitle: '',
                start: '2018-06-20T10:00',
                end  : '2018-06-20T12:00'
            },
            {
                id: 20,
                title: 'IRA - ESP',
                extendedTitle: '',
                start: '2018-06-20T13:00',
                end  : '2018-06-20T15:00'
            },
            {
                id: 21,
                title: 'DIN - AUS',
                extendedTitle: '',
                start: '2018-06-21T07:00',
                end  : '2018-06-21T09:00'
            },
            {
                id: 22,
                title: 'FRA - PER',
                extendedTitle: '',
                start: '2018-06-21T10:00',
                end  : '2018-06-21T12:00'
            },
            {
                id: 23,
                title: 'ARG - CRO',
                extendedTitle: '',
                start: '2018-06-21T13:00',
                end  : '2018-06-21T15:00'
            },
            {
                id: 24,
                title: 'BRA - COS',
                extendedTitle: '',
                start: '2018-06-22T07:00',
                end  : '2018-06-22T09:00'
            },
            {
                id: 25,
                title: 'NIG - ISL',
                extendedTitle: '',
                start: '2018-06-22T10:00',
                end  : '2018-06-22T12:00'
            },
            {
                id: 26,
                title: 'SER - SUI',
                extendedTitle: '',
                start: '2018-06-22T13:00',
                end  : '2018-06-22T15:00'
            },
            {
                id: 27,
                title: 'BEL - TUN',
                extendedTitle: '',
                start: '2018-06-23T07:00',
                end  : '2018-06-23T09:00'
            },
            {
                id: 28,
                title: 'COR - MEX',
                extendedTitle: '',
                start: '2018-06-23T10:00',
                end  : '2018-06-23T12:00'
            },
            {
                id: 29,
                title: 'ALE - SUE',
                extendedTitle: '',
                start: '2018-06-23T13:00',
                end  : '2018-06-23T15:00'
            },
            {
                id: 30,
                title: 'ING - PAN',
                extendedTitle: '',
                start: '2018-06-24T07:00',
                end  : '2018-06-24T09:00'
            },
            {
                id: 31,
                title: 'JAP - SEN',
                extendedTitle: '',
                start: '2018-06-24T10:00',
                end  : '2018-06-24T12:00'
            },
            {
                id: 32,
                title: 'POL - COL',
                extendedTitle: '',
                start: '2018-06-24T13:00',
                end  : '2018-06-24T15:00'
            },
            {
                id: 33,
                title: 'URU - RUS',
                extendedTitle: '',
                start: '2018-06-25T09:00',
                end  : '2018-06-25T11:00'
            },
            {
                id: 34,
                title: 'ASA - EGI',
                extendedTitle: '',
                start: '2018-06-25T09:00',
                end  : '2018-06-25T11:00'
            },
            {
                id: 35,
                title: 'ESP - MAR',
                extendedTitle: '',
                start: '2018-06-25T13:00',
                end  : '2018-06-25T15:00'
            },
            {
                id: 36,
                title: 'IRA - POR',
                extendedTitle: '',
                start: '2018-06-25T13:00',
                end  : '2018-06-25T15:00'
            },
            {
                id: 37,
                title: 'AUS - PER',
                extendedTitle: '',
                start: '2018-06-26T09:00',
                end  : '2018-06-26T11:00'
            },
            {
                id: 38,
                title: 'DIN - FRA',
                extendedTitle: '',
                start: '2018-06-26T09:00',
                end  : '2018-06-26T11:00'
            },
            {
                id: 39,
                title: 'NIG - ARG',
                extendedTitle: '',
                start: '2018-06-26T13:00',
                end  : '2018-06-26T15:00'
            },
            {
                id: 40,
                title: 'ISL - CRO',
                extendedTitle: '',
                start: '2018-06-26T13:00',
                end  : '2018-06-26T15:00'
            },
            {
                id: 41,
                title: 'COR - ALE',
                extendedTitle: '',
                start: '2018-06-27T09:00',
                end  : '2018-06-27T11:00'
            },
            {
                id: 42,
                title: 'MEX - SUE',
                extendedTitle: '',
                start: '2018-06-27T09:00',
                end  : '2018-06-27T11:00'
            },
            {
                id: 43,
                title: 'SER - BRA',
                extendedTitle: '',
                start: '2018-06-27T13:00',
                end  : '2018-06-27T15:00'
            },
            {
                id: 44,
                title: 'SUI - COS',
                extendedTitle: '',
                start: '2018-06-27T13:00',
                end  : '2018-06-27T15:00'
            },
            {
                id: 45,
                title: 'JAP - POL',
                extendedTitle: '',
                start: '2018-06-28T09:00',
                end  : '2018-06-28T11:00'
            },
            {
                id: 46,
                title: 'SEN - COL',
                extendedTitle: '',
                start: '2018-06-28T09:00',
                end  : '2018-06-28T11:00'
            },
            {
                id: 47,
                title: 'PAN - TUN',
                extendedTitle: '',
                start: '2018-06-28T13:00',
                end  : '2018-06-28T15:00'
            },
            {
                id: 48,
                title: 'ENG - BEL',
                extendedTitle: '',
                start: '2018-06-28T13:00',
                end  : '2018-06-28T15:00'
            }
        ]
    });
}
    