	$(document).ready(function() {
	    var date = new Date();
		var d = date.getDate();
		var m = date.getMonth();
		var y = date.getFullYear();
		
		/*  className colors
		
		className: default(transparent), important(red), chill(pink), success(green), info(blue)
		
		*/		
		
		  
		/* initialize the external events
		-----------------------------------------------------------------*/
	
		$('#external-events div.external-event').each(function() {
		
			// create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
			// it doesn't need to have a start or end
			var eventObject = {
				title: $.trim($(this).text()) // use the element's text as the event title
			};
			
			// store the Event Object in the DOM element so we can get to it later
			$(this).data('eventObject', eventObject);
			
			// make the event draggable using jQuery UI
			$(this).draggable({
				zIndex: 999,
				revert: true,      // will cause the event to go back to its
				revertDuration: 0  //  original position after the drag
			});
			
		});
	
	
		/* initialize the calendar
		-----------------------------------------------------------------*/
		
		var calendar =  $('#calendar').fullCalendar({
			header: {
				left: 'title',
				center: 'agendaDay,agendaWeek,month',
				right: 'prev,next today'
			},
			editable: true,
			firstDay: 1, //  1(Monday) this can be changed to 0(Sunday) for the USA system
			selectable: true,
			defaultView: 'month',
			
			axisFormat: 'h:mm',
			columnFormat: {
                month: 'ddd',    // Mon
                week: 'ddd d', // Mon 7
                day: 'dddd M/d',  // Monday 9/7
                agendaDay: 'dddd d'
            },
            titleFormat: {
                month: 'MMMM yyyy', // September 2009
                week: "MMMM yyyy", // September 2009
                day: 'MMMM yyyy'                  // Tuesday, Sep 8, 2009
            },
			allDaySlot: false,
			selectHelper: true,
			select: function(start, end, allDay) {
				var title = prompt('Event Title:');
				if (title) {
					calendar.fullCalendar('renderEvent',
						{
							title: title,
							start: start,
							end: end,
							allDay: allDay
						},
						true // make the event "stick"
					);
				}
				calendar.fullCalendar('unselect');
			},
			droppable: true, // this allows things to be dropped onto the calendar !!!
			drop: function(date, allDay) { // this function is called when something is dropped
			
				// retrieve the dropped element's stored Event Object
				var originalEventObject = $(this).data('eventObject');
				
				// we need to copy it, so that multiple events don't have a reference to the same object
				var copiedEventObject = $.extend({}, originalEventObject);
				
				// assign it the date that was reported
				copiedEventObject.start = date;
				copiedEventObject.allDay = allDay;
				
				// render the event on the calendar
				// the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
				$('#calendar').fullCalendar('renderEvent', copiedEventObject, true);
				
				// is the "remove after drop" checkbox checked?
				if ($('#drop-remove').is(':checked')) {
					// if so, remove the element from the "Draggable Events" list
					$(this).remove();
				}
				
			},
			
			events: [
				{
					id: 1,
					title: 'RUS - ASA',
					start: new Date(y, 5, 14, 10, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 2,
					title: 'EGI - URU',
					start: new Date(y, 5, 15, 7, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 3,
					title: 'MAR - IRA',
					start: new Date(y, 5, 15, 10, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 4,
					title: 'POR - ESP',
					start: new Date(y, 5, 15, 13, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 5,
					title: 'FRA - AUS',
					start: new Date(y, 5, 16, 5, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 6,
					title: 'ARG - ISL',
					start: new Date(y, 5, 16, 8, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 7,
					title: 'PER - DIN',
					start: new Date(y, 5, 16, 11, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 8,
					title: 'CRO - NIG',
					start: new Date(y, 5, 16, 14, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 9,
					title: 'COS - SER',
					start: new Date(y, 5, 17, 7, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 10,
					title: 'ALE - MEX',
					start: new Date(y, 5, 17, 10, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 11,
					title: 'BRA - SUI',
					start: new Date(y, 5, 17, 13, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 12,
					title: 'SUE - COR',
					start: new Date(y, 5, 18, 7, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 13,
					title: 'BEL - PAN',
					start: new Date(y, 5, 18, 10, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 14,
					title: 'TUN - ING',
					start: new Date(y, 5, 18, 13, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 15,
					title: 'COL - JAP',
					start: new Date(y, 5, 19, 7, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 16,
					title: 'POL - SEN',
					start: new Date(y, 5, 19, 10, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 17,
					title: 'RUS - EGI',
					start: new Date(y, 5, 19, 13, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 18,
					title: 'POR - MAR',
					start: new Date(y, 5, 20, 7, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 19,
					title: 'URU - ASA',
					start: new Date(y, 5, 20, 10, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 20,
					title: 'IRA - ESP',
					start: new Date(y, 5, 20, 13, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 21,
					title: 'DIN - AUS',
					start: new Date(y, 5, 21, 7, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 22,
					title: 'FRA - PER',
					start: new Date(y, 5, 21, 10, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 23,
					title: 'ARG - CRO',
					start: new Date(y, 5, 21, 13, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 24,
					title: 'BRA - COS',
					start: new Date(y, 5, 22, 7, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 25,
					title: 'NIG - ISL',
					start: new Date(y, 5, 22, 10, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 26,
					title: 'SER - SUI',
					start: new Date(y, 5, 22, 13, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 27,
					title: 'BEL - TUN',
					start: new Date(y, 5, 23, 7, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 28,
					title: 'COR - MEX',
					start: new Date(y, 5, 23, 10, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 29,
					title: 'ALE - SUE',
					start: new Date(y, 5, 23, 13, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 30,
					title: 'ING - PAN',
					start: new Date(y, 5, 24, 7, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 31,
					title: 'JAP - SEN',
					start: new Date(y, 5, 24, 10, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 32,
					title: 'POL - COL',
					start: new Date(y, 5, 24, 13, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 33,
					title: 'URU - RUS',
					start: new Date(y, 5, 25, 9, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 34,
					title: 'ASA - EGI',
					start: new Date(y, 5, 25, 9, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 35,
					title: 'ESP - MAR',
					start: new Date(y, 5, 25, 13, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 36,
					title: 'IRA - POR',
					start: new Date(y, 5, 25, 13, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 37,
					title: 'AUS - PER',
					start: new Date(y, 5, 26, 9, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 38,
					title: 'DIN - FRA',
					start: new Date(y, 5, 26, 9, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 39,
					title: 'NIG - ARG',
					start: new Date(y, 5, 26, 13, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 40,
					title: 'ISL - CRO',
					start: new Date(y, 5, 26, 13, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 41,
					title: 'COR - ALE',
					start: new Date(y, 5, 27, 9, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 42,
					title: 'MEX - SUE',
					start: new Date(y, 5, 27, 9, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 43,
					title: 'SER - BRA',
					start: new Date(y, 5, 27, 13, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 44,
					title: 'SUI - COS',
					start: new Date(y, 5, 27, 13, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 45,
					title: 'JAP - POL',
					start: new Date(y, 5, 28, 9, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 46,
					title: 'SEN - COL',
					start: new Date(y, 5, 28, 9, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 47,
					title: 'PAN - TUN',
					start: new Date(y, 5, 28, 13, 0),
					allDay: false,
					className: 'info'
				},
				{
					id: 48,
					title: 'ENG - BEL',
					start: new Date(y, 5, 28, 13, 0),
					allDay: false,
					className: 'info'
				}
			],			
		});
		
		
	});