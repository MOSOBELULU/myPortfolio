import classes from './Contact.module.css'

export default function Contact() {
  return (
    <div className={classes.container} id='Contact'>
      <h1 className={classes.heading}>Get In Touch With Me</h1>
      <a href="mailto:mosobelulu@gmail.com">mosobelulu@gmail.com</a>
      <p> Call me on: +27 76 527 5896</p>
      <p>Or Simply fill Out the Form Below</p>
      <form className={classes.form} action="https://formsubmit.co/mosobelulu@gmail.com" method="POST" >
<div className={classes.control}>
    <label htmlFor='name'>Name</label>
    <input type='text' required id='name'/>
</div>

<div className={classes.control}>
    <label htmlFor='surname'>Surname</label>
    <input type='text' required id='surname' />
</div>

<div className={classes.control}>
    <label htmlFor='description'>Leave a message for me</label>
    <textarea id='description' required rows='5' ></textarea>
</div>

<div className={classes.actions}>
    <button>Submit</button>
</div>
        </form>
    </div>
  )
}
