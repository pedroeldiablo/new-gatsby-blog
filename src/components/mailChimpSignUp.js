import React, {useState, useEffect} from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'


export const MailChimpSignUp = () => {
    const [email, setEmail ] = useState('');
    const [listFields, updateListFields] = useState({'FNAME': '', 'LNAME': ''});
    
  // `addToMailchimp` returns a promise
  // Note that you need to send an email & optionally, listFields
  // these values can be pulled from React state, form fields 

    const handleChange = e => {
    updateListFields({...listFields,
        [`${e.name}`]: e.value,
    });
    
    }

    // see form entries and updates in console for debugging
    useEffect(() => {
        console.log("EMAIL", email);
        console.log("newly updated", listFields);
    })

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, listFields);
    const result = await addToMailchimp(email, listFields).then(({ msg, result }) => {
        console.log('msg', `${result}: ${msg}`)

        if (result !== 'success') {
            throw msg
        }
        alert(msg)
    })
    .catch(err => {
        console.log('err', err)
        alert(err)
    })
    console.log(result);
    // I recommend setting `result` to React state
    // but you can do whatever you want
  }

    return (
    <form onSubmit={handleSubmit} method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" classNameName="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
	    <h2>Subscribe</h2>
        <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
        <div className="mc-field-group">
	        <label for="mce-EMAIL">{`Email Address`} <span className="asterisk">*</span>
            </label>
	        <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" value={email} onChange={e => {setEmail(e.target.value); console.log(email)}}
        ></input>
        </div>
        <div className="mc-field-group">
            <label for="mce-FNAME">First Name </label>
            <input type="text" name="FNAME" className="" id="mce-FNAME" value={listFields['FNAME']} onChange={e => 
          handleChange(e.target)}></input>
        </div>
    <div className="mc-field-group">
        <label for="mce-LNAME">Last Name </label>
        <input type="text" name="LNAME" className="" id="mce-LNAME" value={listFields['LNAME']} onChange={e => 
          handleChange(e.target)}></input>
    </div>
    {/* <div className="mc-field-group size1of2">
        <label for="mce-BIRTHDAY-month">Birthday </label>
        <div className="datefield">
            <span className="subfield monthfield"><input className="birthday " type="text" pattern="[0-9]*" value={listFields[name]} placeholder="MM" size="2" maxlength="2" name="BIRTHDAY[month]" id="mce-BIRTHDAY-month" onChange={e => 
          handleChange(e.target)}></input></span> / 
            <span className="subfield dayfield"><input className="birthday " type="text" pattern="[0-9]*" value={listFields[name]} placeholder="DD" size="2" maxlength="2" name="BIRTHDAY[day]" id="mce-BIRTHDAY-day" onChange={e => 
          handleChange(e.target)}></input></span> 
            <span className="small-meta nowrap">( mm / dd )</span>
        </div>
    </div>	 */}
    {/* <div id="mce-responses" className="clear">
            <div className="response" id="mce-error-response" style={{display:none}}></div>
            <div className="response" id="mce-success-response" style={{display:none}}></div>
    </div>     */}
        {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
        <div style={{position: `absolute`, left: `-5000px`}} aria-hidden="true"><input type="text" name="b_b4b54af180d24c229a5ee6172_4635aac635" tabindex="-1" value={listFields[name]} onChange={e => 
          handleChange(e.target)}></input></div>
        <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"></input></div>
    </div>
</form>
)
}

export default MailChimpSignUp;
