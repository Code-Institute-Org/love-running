var currentIndex = 0;
       function markAsDone(){
            var steps = document.getElementById('prepList').getElementsByTagName('li');
            var result = steps[currentIndex].innerHTML.strike();
            steps[currentIndex].innerHTML = result;
            currentIndex++;
       }