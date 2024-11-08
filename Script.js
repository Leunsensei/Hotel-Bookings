const todolist =[];

renderTodolist();

function renderTodolist() {

    let todoListHTML = '';

    for (let i = 0; i <todolist.length; i++) {
        const todo = todolist[i];

        const name = todo.name;
        const phone = todo.phone;
        const address = todo.address;
        const dueDate = todo.dueDate;

        const html =`
        <div class="reserved">
            <div class="name-date"><div class="name">${name}</div><div class="date">${dueDate}</div></div>
            <div class="no-ad">${phone}</div>
            <div class="no-ad">${address} </div>
             
            <button onclick="
             todolist.splice(${i}, 1);
             renderTodolist();
            " class="delete">Delete</button>
        </div>
        `;

        todoListHTML += html;
    };

    document.querySelector('.client-list')
        .innerHTML = todoListHTML;
};


function submitReserve() {

const newNameInput = document.querySelector('.client-name');
const newName = newNameInput.value;

const newPhoneInput = document.querySelector('.client-phone-number');
const newPhone = newPhoneInput.value;

const newAddressInput = document.querySelector('.client-address');
const newAddress = newAddressInput.value;

const newDuedateInput = document.querySelector('.client-due-date');
const newDuedate = newDuedateInput.value;

todolist.push({
  name: newName,
  phone: newPhone,
  address: newAddress,
  dueDate: newDuedate
});

console.log(todolist);

newNameInput.value = '';
newPhoneInput.value = '';
newAddressInput.value = '';
newDuedateInput.value = '';

renderTodolist();
};