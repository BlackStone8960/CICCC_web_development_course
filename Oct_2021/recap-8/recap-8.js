// 1. Create a function that counts the integers number of digits.

// count(318) // Expected output 3
const countDigits = num => num.toString().length;
// console.log(countDigits(107650));

// 2. Create a Table with 3 rows and 3 columns using Javascript
const table = `
  <table class="table1">
    <tr>
      <th>1</th>
      <th>2</th>
      <th>3</th>
    </tr>
    <tr>
      <td>4</td>
      <td>5</td>
      <td>6</td>
    </tr>
    <tr>
      <td>7</td>
      <td>8</td>
      <td>9</td>
    </tr>
  </table>
`
document.body.insertAdjacentHTML('afterbegin', table);

// 3. Create a counter using html, js and css. There should be a (+) button and (-) button which will increment and decrement the value. 
// Note: Value cannot go below 0
const number = document.getElementById('number');
document.getElementById('minus').addEventListener('click', () => {
  number.innerHTML > 0 && number.innerHTML--;
})
plus.addEventListener('click', () => {
  number.innerHTML++;
})

// 4. Create a form, having values Name, Email, Password and console those values entered by the user on submit button.
const userForm = document.forms.userform;
const onSubmit = (e) => {
  e.preventDefault();
  console.log(`Name: ${userForm.name.value}`);
  console.log(`Email: ${userForm.email.value}`);
  console.log(`Password: ${userForm.password.value}`);
}