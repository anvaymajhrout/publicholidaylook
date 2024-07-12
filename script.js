document.getElementById('holidayForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const country = document.getElementById('country').value;
    const year = document.getElementById('year').value;
    const month = document.getElementById('month').value;
    
    fetch(`https://calendarific.com/api/v2/holidays?&api_key=BHHUTrMQwdtFcoBTqB47yMRT7q684FFD&country=${country}&year=${year}&month=${month}`)
        .then(response => response.json())
        .then(data => {
            const results = document.getElementById('results');
            results.innerHTML = '';
            
            if (data.response.holidays.length > 0) {
                data.response.holidays.forEach(holiday => {
                    const holidayDiv = document.createElement('div');
                    holidayDiv.classList.add('holiday');
                    holidayDiv.innerHTML = `<strong>${holiday.name}</strong> (${holiday.date.iso})`;
                    results.appendChild(holidayDiv);
                });
            } else {
                results.innerHTML = '<p>No holidays found for the selected month, year, and country.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
