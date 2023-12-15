import { Counter } from "./Counter";

export default function Page() {
  return (
    <>
      <h1 class="c-red flex-wrap">My vike-solid app</h1>
      This page is:
      <ul class="flex flex-row-reverse">
        <li class="w-26">Rendered to HTML.</li>
        <li class="w-26">  
          Interactive. <Counter />
        </li>
      </ul>
      
     <div style="background-color:#ff0066;padding:20px;"> 
      <form>
      <label for="fname">First name:&#128509;</label>
<input type="text" id="fname" name="fname"></input><br></br>
<label for="lname">Last name:&#128509;</label>
<input type="text" id="lname" name="lname"></input><br></br>
<input type="submit" value="Submit"></input>
</form>
</div>

    </>
  );
}
