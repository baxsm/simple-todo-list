var add_btn = document.querySelector('#newtask button');
var input_field = document.querySelector('#newtask input');
var tasks = document.querySelector('#tasks');

//add button
add_btn.onclick = function () {
    //alert if the input field in empty
    if (input_field.value.length == 0 || input_field.value.length >= 40) {
        input_field.value = "";
        alert('Please Enter a valid Task!');
    }
    else {
        //make the tasks div visible
        tasks.style.visibility = "visible";
        tasks.style.padding = "30px 20px";
        tasks.style.margin = "60px 0 0 0";

        tasks.innerHTML +=
        `
        <div class="task">
            <span id="taskname">
                ${input_field.value}
            </span>
            <button class="delete">
                <i class="far fa-trash-alt"></i>
            </button>
        </div>        
        `;

        delete_btn();
        completed();

        //input field back to being empty
        input_field.value = "";
    }
}

//delete button
function delete_btn() {
    var current = document.querySelectorAll(".delete");
    for (var i = 0; i < current.length; i++) {
        current[i].onclick = function () {
            this.parentNode.remove();
            var count_task = document.querySelectorAll(".task");
            if (count_task.length == 0) {
                tasks.style.visibility = "hidden";
                tasks.style.padding = "0";
                tasks.style.margin = "0";
            }
        }
    }
}

//cross out the completed tasks
function completed() {
    var completed = document.querySelectorAll(".task");
    for (var i = 0; i < completed.length; i++) {
        completed[i].onclick = function () {
            this.classList.toggle('completed');
        }
    }
}
