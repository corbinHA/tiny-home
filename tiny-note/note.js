let notes = [];

const generateNote = () => {
    const div = document.createElement('div');
    div.id = 'note';
    div.height = '500';
    div.width = '500';
    div.style.border = '5px solid orange';
    div.style.background = 'white';

    const submit = document.createElement('button');
    submit.id = 'submit-btn';
    submit.innerHTML = 'Submit'

    const input = document.createElement('input');
    input.id = 'note-input';
    input.placeholder = 'Enter your note...'

    const options = document.getElementById('options');
    options.append(input)
    options.append(submit)

    const display = document.getElementById('display');
    display.append(canvas);

}

generateNote()