import $ from 'jQuery'
function addItem() {

    let value = $('#new-todo-item').val();
    if (value === '') { alert('Item cannot be empty') }
    else {
        $('#todo-list').append(`<li class="unchecked" >${value}<div class="delete">x</div></li>`)

        $('.delete').click(function () {
            $(this).parent().remove();
        })

        $('.unchecked').click(function () {
            $(this).toggleClass('checked');
        });

    }
}
window.addItem = addItem;
