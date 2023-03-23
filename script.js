      //Bring HTML element
      const search = document.getElementById('search')
      const screen_one = document.getElementById('screen-one')
      const screen_two = document.getElementById('screen-two')
      const form = document.getElementById('area-form')
      var area = document.querySelector('area')

      form.addEventListener('submit', (e) => {
          e.preventDefault()

          area = search.value

          if (area) {
              getAreas(area)

              search.value = ''
          }
      })

    //   var mockresponse = {
    //       "areas": [{
    //               "id": "tshwane-11-pretorianorth",
    //               "name": "PRETORIA NORTH (11)",
    //               "region": "City of Tshwane"
    //           },
    //           {
    //               "id": "eskde-14-pretorianketoanafreestate",
    //               "name": "Pretoria (14)",
    //               "region": "Eskom Direct, Nketoana, Free State"
    //           },
    //           {
    //               "id": "eskdo-14-pretoriagreatertubatselimpopo",
    //               "name": "Pretoria (14)",
    //               "region": "Eskom Direct, Greater Tubatse, Limpopo"
    //           },
    //           {
    //               "id": "eskdo-8-pretorialephalalelimpopo",
    //               "name": "Pretoria (8)",
    //               "region": "Eskom Direct, Lephalale, Limpopo"
    //           },
    //           {
    //               "id": "tshwane-14-pretoriaindustrial",
    //               "name": "PRETORIA INDUSTRIAL (14)",
    //               "region": "City of Tshwane"
    //           },
    //           {
    //               "id": "eskde-13-pretoriaannexngwathefreestate",
    //               "name": "Pretoria Annex (13)",
    //               "region": "Eskom Direct, Ngwathe, Free State"
    //           },
    //           {
    //               "id": "tshwane-14-pretoriaext10",
    //               "name": "PRETORIA Ext 10 (14)",
    //               "region": "City of Tshwane"
    //           },
    //           {
    //               "id": "tshwane-14-pretoriaext9",
    //               "name": "PRETORIA Ext 9 (14)",
    //               "region": "City of Tshwane"
    //           },
    //           {
    //               "id": "tshwane-11-pretorianorthext4",
    //               "name": "PRETORIA NORTH Ext 4 (11)",
    //               "region": "City of Tshwane"
    //           },
    //           {
    //               "id": "tshwane-11-pretorianorthext1",
    //               "name": "PRETORIA NORTH Ext 1 (11)",
    //               "region": "City of Tshwane"
    //           }
    //       ]
    //   }

      function getAreas(area) {
          var myHeaders = new Headers();
          myHeaders.append("token", "0FB47D30-F5F34845-BD7F0802-5D9F828E");
          myHeaders.append("Access-Control-Allow-Origin", "https://developer.sepush.co.za");
          var requestOptions = {
              method: 'GET',
              headers: myHeaders,
              redirect: 'follow'
          };

        fetch(`https://cors-anywhere.herokuapp.com/https://developer.sepush.co.za/business/2.0/areas_search?text=${area}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            const arrayLength = Object.keys(result.areas).length
            for (let i = 0; i < arrayLength; i++) {
              let name = result.areas[i].name
              let id = result.areas[i].id
              createAreaCards(name, id)
          }

        const buttons = document.querySelectorAll('.button')

          buttons.forEach(button => {
              button.addEventListener('click', function handleClick(event) {
                  console.log('button clicked', button.id);
                  screen_one.innerHTML = ''
                  getAreaInfo(button.id)

              });
          });

        })
        .catch(error => console.log('error', error));

        //Without Fetch
        //   const arrayLength = Object.keys(mockresponse.areas).length
        //   for (let i = 0; i < arrayLength; i++) {
        //       let name = mockresponse.areas[i].name
        //       let id = mockresponse.areas[i].id
        //       createAreaCards(name, id)
        //   }

      }


      function createAreaCards(name, id) {
          console.log(name)
          let area = name
          const cardHTML = `
            <div class = "container">
                <div class = "area-screen-one">${area}</div>
                <div class = "button" id =${id}>Choose Location</div>
            </div>`

          screen_one.innerHTML += cardHTML
      }


    //   var mockres = {
    //       "events": [{
    //           "end": "2023-03-12T22:30:00+02:00",
    //           "note": "Stage 8 (TESTING: current)",
    //           "start": "2023-03-12T20:00:00+02:00"
    //       }],
    //       "info": {
    //           "name": "TESTING Fourways Ext 10 (10)",
    //           "region": "Eskom Direct, City of Johannesburg, Gauteng"
    //       },
    //       "schedule": {
    //           "days": [{
    //                   "date": "2023-03-12",
    //                   "name": "Sunday",
    //                   "stages": [
    //                       [
    //                           "20:00-22:30"
    //                       ],
    //                       [
    //                           "12:00-14:30",
    //                           "20:00-22:30"
    //                       ],
    //                       [
    //                           "04:00-06:30",
    //                           "12:00-14:30",
    //                           "20:00-22:30"
    //                       ],
    //                       [
    //                           "04:00-06:30",
    //                           "12:00-14:30",
    //                           "20:00-22:30"
    //                       ],
    //                       [
    //                           "04:00-06:30",
    //                           "12:00-14:30",
    //                           "20:00-00:30"
    //                       ],
    //                       [
    //                           "04:00-06:30",
    //                           "12:00-16:30",
    //                           "20:00-00:30"
    //                       ],
    //                       [
    //                           "04:00-08:30",
    //                           "12:00-16:30",
    //                           "20:00-00:30"
    //                       ],
    //                       [
    //                           "04:00-08:30",
    //                           "12:00-16:30",
    //                           "20:00-00:30"
    //                       ]
    //                   ]
    //               },
    //               {
    //                   "date": "2023-03-13",
    //                   "name": "Monday",
    //                   "stages": [
    //                       [],
    //                       [
    //                           "18:00-20:30"
    //                       ],
    //                       [
    //                           "10:00-12:30",
    //                           "18:00-20:30"
    //                       ],
    //                       [
    //                           "02:00-04:30",
    //                           "10:00-12:30",
    //                           "18:00-20:30"
    //                       ],
    //                       [
    //                           "02:00-04:30",
    //                           "10:00-12:30",
    //                           "18:00-20:30"
    //                       ],
    //                       [
    //                           "02:00-04:30",
    //                           "10:00-12:30",
    //                           "18:00-22:30"
    //                       ],
    //                       [
    //                           "02:00-04:30",
    //                           "10:00-14:30",
    //                           "18:00-22:30"
    //                       ],
    //                       [
    //                           "02:00-06:30",
    //                           "10:00-14:30",
    //                           "18:00-22:30"
    //                       ]
    //                   ]
    //               },
    //               {
    //                   "date": "2023-03-14",
    //                   "name": "Tuesday",
    //                   "stages": [
    //                       [
    //                           "02:00-04:30"
    //                       ],
    //                       [
    //                           "02:00-04:30"
    //                       ],
    //                       [
    //                           "02:00-04:30",
    //                           "18:00-20:30"
    //                       ],
    //                       [
    //                           "02:00-04:30",
    //                           "10:00-12:30",
    //                           "18:00-20:30"
    //                       ],
    //                       [
    //                           "02:00-06:30",
    //                           "10:00-12:30",
    //                           "18:00-20:30"
    //                       ],
    //                       [
    //                           "02:00-06:30",
    //                           "10:00-12:30",
    //                           "18:00-20:30"
    //                       ],
    //                       [
    //                           "02:00-06:30",
    //                           "10:00-12:30",
    //                           "18:00-22:30"
    //                       ],
    //                       [
    //                           "02:00-06:30",
    //                           "10:00-14:30",
    //                           "18:00-22:30"
    //                       ]
    //                   ]
    //               },
    //               {
    //                   "date": "2023-03-15",
    //                   "name": "Wednesday",
    //                   "stages": [
    //                       [
    //                           "10:00-12:30"
    //                       ],
    //                       [
    //                           "02:00-04:30",
    //                           "10:00-12:30"
    //                       ],
    //                       [
    //                           "02:00-04:30",
    //                           "10:00-12:30"
    //                       ],
    //                       [
    //                           "02:00-04:30",
    //                           "10:00-12:30",
    //                           "18:00-20:30"
    //                       ],
    //                       [
    //                           "02:00-04:30",
    //                           "10:00-14:30",
    //                           "18:00-20:30"
    //                       ],
    //                       [
    //                           "02:00-06:30",
    //                           "10:00-14:30",
    //                           "18:00-20:30"
    //                       ],
    //                       [
    //                           "02:00-06:30",
    //                           "10:00-14:30",
    //                           "18:00-20:30"
    //                       ],
    //                       [
    //                           "02:00-06:30",
    //                           "10:00-14:30",
    //                           "18:00-22:30"
    //                       ]
    //                   ]
    //               },
    //               {
    //                   "date": "2023-03-16",
    //                   "name": "Thursday",
    //                   "stages": [
    //                       [
    //                           "18:00-20:30"
    //                       ],
    //                       [
    //                           "10:00-12:30",
    //                           "18:00-20:30"
    //                       ],
    //                       [
    //                           "02:00-04:30",
    //                           "10:00-12:30",
    //                           "18:00-20:30"
    //                       ],
    //                       [
    //                           "02:00-04:30",
    //                           "10:00-12:30",
    //                           "18:00-20:30"
    //                       ],
    //                       [
    //                           "02:00-04:30",
    //                           "10:00-12:30",
    //                           "18:00-22:30"
    //                       ],
    //                       [
    //                           "02:00-04:30",
    //                           "10:00-14:30",
    //                           "18:00-22:30"
    //                       ],
    //                       [
    //                           "02:00-06:30",
    //                           "10:00-14:30",
    //                           "18:00-22:30"
    //                       ],
    //                       [
    //                           "02:00-06:30",
    //                           "10:00-14:30",
    //                           "18:00-22:30"
    //                       ]
    //                   ]
    //               },
    //               {
    //                   "date": "2023-03-17",
    //                   "name": "Friday",
    //                   "stages": [
    //                       [],
    //                       [
    //                           "16:00-18:30"
    //                       ],
    //                       [
    //                           "08:00-10:30",
    //                           "16:00-18:30"
    //                       ],
    //                       [
    //                           "00:00-02:30",
    //                           "08:00-10:30",
    //                           "16:00-18:30"
    //                       ],
    //                       [
    //                           "00:00-02:30",
    //                           "08:00-10:30",
    //                           "16:00-18:30"
    //                       ],
    //                       [
    //                           "00:00-02:30",
    //                           "08:00-10:30",
    //                           "16:00-20:30"
    //                       ],
    //                       [
    //                           "00:00-02:30",
    //                           "08:00-12:30",
    //                           "16:00-20:30"
    //                       ],
    //                       [
    //                           "00:00-04:30",
    //                           "08:00-12:30",
    //                           "16:00-20:30"
    //                       ]
    //                   ]
    //               },
    //               {
    //                   "date": "2023-03-18",
    //                   "name": "Saturday",
    //                   "stages": [
    //                       [
    //                           "00:00-02:30"
    //                       ],
    //                       [
    //                           "00:00-02:30"
    //                       ],
    //                       [
    //                           "00:00-02:30",
    //                           "16:00-18:30"
    //                       ],
    //                       [
    //                           "00:00-02:30",
    //                           "08:00-10:30",
    //                           "16:00-18:30"
    //                       ],
    //                       [
    //                           "00:00-04:30",
    //                           "08:00-10:30",
    //                           "16:00-18:30"
    //                       ],
    //                       [
    //                           "00:00-04:30",
    //                           "08:00-10:30",
    //                           "16:00-18:30"
    //                       ],
    //                       [
    //                           "00:00-04:30",
    //                           "08:00-10:30",
    //                           "16:00-20:30"
    //                       ],
    //                       [
    //                           "00:00-04:30",
    //                           "08:00-12:30",
    //                           "16:00-20:30"
    //                       ]
    //                   ]
    //               }
    //           ],
    //           "source": "https://example.com/test.schedule/current"
    //       }
    //   }

      function getAreaInfo(area_id) {
          var myHeaders = new Headers();
          myHeaders.append("token", "0FB47D30-F5F34845-BD7F0802-5D9F828E");
          myHeaders.append("Access-Control-Allow-Origin", "https://developer.sepush.co.za");
          var requestOptions = {
              method: 'GET',
              headers: myHeaders,
              redirect: 'follow'
          };
          
          fetch(`https://cors-anywhere.herokuapp.com/https://developer.sepush.co.za/business/2.0/area?id=${area_id}`, requestOptions)
            .then(response =>response.json())
            .then(data => { 
                console.log("Data:", data)
                const arrayLength = Object.keys(data.schedule.days).length
                for (let i = 0; i < arrayLength; i++) {
                let stage = data.events[0].note.substring(0, 7);
                let stageNumber = Number(stage.substr(6,1))
                let weekday = data.schedule.days[i].name
                console.log('stageNumber:', stageNumber)
                console.log('stages:', data.schedule.days[i].stages)
                let schedule = data.schedule.days[i].stages[stageNumber-1]
                console.log('schedule:', schedule)
                createScheduleCards(stage, weekday, schedule, stageNumber)
      }})
            .catch(error => console.log('error', error))


        //Without Fetch
        //   const arrayLength = Object.keys(mockres.schedule.days).length
        //   for (let i = 0; i < arrayLength; i++) {

        //         let stage = mockres.events[0].note.substring(0, 7);
        //         let stageNumber = Number(stage.substr(6,1))
        //         let weekday = mockres.schedule.days[i].name
        //         console.log('stageNumber:', stageNumber)
        //         console.log('stages:', mockres.schedule.days[i].stages)
        //         let schedule = mockres.schedule.days[i].stages[stageNumber-1]
        //         console.log('schedule:', schedule)
        //         createScheduleCards(stage, weekday, schedule, stageNumber)
              
    }


      function createScheduleCards(stage, weekday, schedule, stageNumber) {
              // Define an array of colors for each stage
      var colors = [{
              stage: 1,
              background: '#FFFFE0',
              foreground: '#FFFF00'
          },
          {
              stage: 2,
              background: '#FFFACD',
              foreground: '#FFD700'
          },
          {
              stage: 3,
              background: '#FFE5B4',
              foreground: '#FFA500'
          },
          {
              stage: 4,
              background: '#FFE4E1',
              foreground: '#FF7F50'
          },
          {
              stage: 5,
              background: '#FFF0F5',
              foreground: '#FF2C05'
          },
          {
              stage: 6,
              background: '#FFF0F5',
              foreground: '#F00505'
          },
          {
              stage: 7,
              background: '#E6E6FA',
              foreground: '#FF00FF'
          },
          {
              stage: 8,
              background: '#FFB6C1',
              foreground: '#FF0000'
          },
      ];

      // Find the color object for the given stage number
      var color = colors.find(c => c.stage === stageNumber)

      // Update the CSS variables to set the background and foreground colors
      document.documentElement.style.setProperty('--foreground', color.foreground)
      document.documentElement.style.setProperty('--background', color.background)
        

        const cardHTML = `
        <div class="container">
            <div class="container-header ${schedule[0] === undefined || schedule[0] === '' ? 'hidden' : ''}">
                <small class="Stage">${stage}</small>
                <small class="weekday">${weekday}</small>
            </div>
        <div class="date-time-containers">
            ${schedule.map((time, index) => {
                const isHidden = index > 1 || time === undefined || time === '' ? 'hidden' : ''; // hide the container if index is greater than 1 or time is empty or undefined
                return `
                    <div class="container-date-time ${isHidden}" id="date-time-containers">
                        <div class="timestamp">${time}</div>
                    </div>`
            }).join('')}
                ${schedule[0] === undefined || schedule[0] === '' ? '<div class="loadshedding-suspended"><img src="./assets/lightning-color.png" alt="lighting-color"><p>Loadshedding<br><small class="LS-text">suspended</small></p></div>' : ''}
            </div>
        </div>`

        screen_two.innerHTML += cardHTML
      }



      //const Area_URL = 'https://developer.sepush.co.za/business/2.0/areas_search?text='
      //const AreaInfo = 'https://developer.sepush.co.za/business/2.0/area?id=`${area_id}`&test=current'
      // const apiKey = '0FB47D30-F5F34845-BD7F0802-5D9F828E'