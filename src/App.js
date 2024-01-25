
import { useState} from 'react';
import './App.css';

function App() {

  const [formData, setformData] = useState(
    {
      firstName: '',
      lastName: '', 
      age: '', 
      gender: '', 
      contactNumber: '', 
      email: '', 
      condition: {asthma: false, cancer: false, cardiacdisease: false, diabetes: false, hypertension: false, psychiatricDisorder: false, epilepsy: false, other: ""}, 
      symptom: {chestPain: false, respiratory: false, cardiacDisease: false, cardiovascular: false, hematological: false, lymphatic: false, neurological: false, others: ""}, 
      medicated:"", 
      specifyMedication:"", 
      alcohol: ''
    }
  );

  function changeHandler(event) {
    const { name, value, type, checked } = event.target;
  
    setformData((prevFormData) => {
      if (type === 'checkbox') {
        if (name in prevFormData.condition) {
          // Checkbox for conditions
          return {
            ...prevFormData,
            condition: {
              ...prevFormData.condition,
              [name]: checked,
            },
          };
        }
         else if (name in prevFormData.symptom) {
          // Checkbox for symptoms
          return {
            ...prevFormData,
            symptom: {
              ...prevFormData.symptom,
              [name]: checked,
            },
          };
        }
       }
       else if (type === 'radio') {
        // Radio button
        return {
          ...prevFormData,
          [name]: value,
        };
      }
        else if (name === 'other') {
        return {
          ...prevFormData,
          condition: {
            ...prevFormData.condition,
            other: value,
          }
        };
      }
      else if (name === 'others') {
        return {
          ...prevFormData,
          symptom: {
            ...prevFormData.symptom,
            others: value,
          }
        };
      }
      else {
        return {
          ...prevFormData,
          [name]: value,
        };
      }
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
  }


 
  

  return (

    <div className="App">
      <div className="container">
        <form onSubmit={submitHandler} className='form'>

          <div className='heading'>
            <h1>Medical History Form</h1>
          </div>

          <div className='name-box'>
            <p className='name'>Full Name</p>
            <input type="text" className='fname' placeholder='First Name' name='firstName' value={formData.firstName} onChange={changeHandler}></input>
            <input type="text" className='lname' placeholder='Last Name' name='lastName' value={formData.lastName} onChange={changeHandler}></input>
          </div>

          <div className='age-gender-box'>
            <label className='label-age'>
              <p className='age-p'>What is your age?</p>
              <input type="number" className='age' placeholder='Age' name='age' value={formData.age} onChange={changeHandler}></input>
            </label>

            <label className='label-gender'>
              <p className='gender-p'>What is your gender?</p>
              <select name='gender' className='gender' value={formData.gender} onChange={changeHandler}>
                <option className='gender-option'>Please Select</option>
                <option className='gender-option'>Male</option>
                <option className='gender-option'>Female</option>
                <option className='gender-option'>Others</option>
              </select>
            </label>
          </div>

          <div className='number-email-box'>
            <label className='label-number'>
              <p className='number-p'>Contact Number</p>
              <input type="text" className='number' placeholder='Contact Number' name='contactNumber' value={formData.contactNumber} onChange={changeHandler}></input>
            </label>

            <label className='label-email'>
              <p className='email-p'>Email Address</p>
              <input type="email" className='email' placeholder='Email' name='email' value={formData.email} onChange={changeHandler}></input>
            </label>
          </div>

          <div className='condition-main'>
            <p className='condition-pq'>Check the conditions that apply to you or any member of your immediate relatives:</p>
            <label className='condition-container'>
              
              <label className='condition-box'>
                <input type="checkbox" className='condition' name='asthma' checked={formData.condition.asthma} onChange={changeHandler}></input>
                <p className='condition-p'>Asthma</p>
              </label>
              <label className='condition-box'>
                <input type="checkbox" className='condition' name='cancer' checked={formData.condition.cancer} onChange={changeHandler}></input>
                <p className='condition-p'>Cancer</p>
              </label>
              <label className='condition-box'>
                <input type="checkbox" className='condition' name='cardiacdisease' checked={formData.condition.cardiacdisease} onChange={changeHandler}></input>
                <p className='condition-p'>Cardiac Disease</p>
              </label>
              <label className='condition-box'>
                <input type="checkbox" className='condition' name='diabetes' checked={formData.condition.diabetes} onChange={changeHandler}></input>
                <p className='condition-p'>Diabetes</p>
              </label>
              <label className='condition-box'>
                <input type="checkbox" className='condition' name='hypertension' checked={formData.condition.hypertension} onChange={changeHandler}></input>
                <p className='condition-p'>Hypertension</p>
              </label>
              <label className='condition-box'>
                <input type="checkbox" className='condition' name='psychiatricDisorder' checked={formData.condition.psychiatricDisorder} onChange={changeHandler}></input>
                <p className='condition-p'>Psychiatric Disorder</p>
              </label>
              <label className='condition-box'>
                <input type="checkbox" className='condition' name='epilepsy' checked={formData.condition.epilepsy} onChange={changeHandler}></input>
                <p className='condition-p'>Epilepsy</p>
              </label>
            </label>
            <label>
              <p className='condition-text-p'>Other</p>
              <input type="text" className='condition-text' placeholder='Specify Here' name='other' value={formData.condition.other} onChange={changeHandler}></input>
            </label>
          </div>

          <div className='symptom-main'>
            <p className='symptom-pq'>Check the symptoms that you're currently experiencing:</p>
              <label className='symptom-container'>
                
                <label className='symptom-box'>
                  <input type="checkbox" className='symptom' name='chestPain' checked={formData.symptom.chestPain} onChange={changeHandler} />
                  <p className='symptom-p'>Chest Pain</p>
                </label>
                <label className='symptom-box'>
                  <input type="checkbox" className='symptom' name='respiratory' checked={formData.symptom.respiratory} onChange={changeHandler} />
                  <p className='symptom-p'>Respiratory</p>
                </label>
                <label className='symptom-box'>
                  <input type="checkbox" className='symptom' name='cardiacDisease' checked={formData.symptom.cardiacDisease} onChange={changeHandler} />
                  <p className='symptom-p'>Cardiac Disease</p>
                </label>
                <label className='symptom-box'>
                  <input type="checkbox" className='symptom' name='cardiovascular' checked={formData.symptom.cardiovascular} onChange={changeHandler} />
                  <p className='symptom-p'>Cardiovascular</p>
                </label>
                <label className='symptom-box'>
                  <input type="checkbox" className='symptom' name='hematological' checked={formData.symptom.hematological} onChange={changeHandler} />
                  <p className='symptom-p'>Hematological</p>
                </label>
                <label className='symptom-box'>
                  <input type="checkbox" className='symptom' name='lymphatic' checked={formData.symptom.lymphatic} onChange={changeHandler}/>
                  <p className='symptom-p'>Lymphatic</p>
                </label>
                <label className='symptom-box'>
                  <input type="checkbox" className='symptom' name='neurological' checked={formData.symptom.neurological} onChange={changeHandler} />
                  <p className='symptom-p'>Neurological</p>
                </label>
              </label>
            <label>
              <p className='symptom-text-p'>Other</p>
              <input type="text" className='symptom-text' placeholder='Specify Here' name='others' value={formData.symptom.others} onChange={changeHandler}/>
            </label>
          </div>

          <div className='medication-main'>
            <p className='medicated-pq'>Are you currently taking any medication?</p>
            <label className='medicated-container'>
              <label className='medicated-box'>
                <input type="radio" className='medicated' name='medicated' value='Yes' checked={formData.medicated === 'Yes'} onChange={changeHandler}></input>
                <p className='medicated-p'>Yes</p>
              </label>
              <label className='medicated-box'>
                <input type="radio" className='medicated' name='medicated' value='No' checked={formData.medicated === 'No'} onChange={changeHandler}></input>
                <p className='medicated-p'>No</p>
              </label>
            </label>
            <label>
              <p className='medication-p'>Please List Them</p>
              <textarea name='specifyMedication' className='medication' placeholder='Specify Here' value={formData.specifyMedication} onChange={changeHandler}></textarea>
            </label>
          </div>

          <div className='alcohol-main'>
            <p className='alcohol-pq'>How often do you consume alcohol?</p>
            <label className='alcohol-container'>
              
              <label className='alcohol-box'>
                <input type="radio" className='alcohol' name='alcohol' value='Daily' checked={formData.alcohol === 'Daily'} onChange={changeHandler}></input>
                <p className='alcohol-p'>Daily</p>
              </label>
              <label className='alcohol-box'>
                <input type="radio" className='alcohol' name='alcohol' value='Weekly' checked={formData.alcohol === 'Weekly'} onChange={changeHandler}></input>
                <p className='alcohol-p'>Weekly</p>
              </label>
              <label className='alcohol-box'>
                <input type="radio" className='alcohol' name='alcohol' value='Monthly' checked={formData.alcohol === 'Monthly'} onChange={changeHandler}></input>
                <p className='alcohol-p'>Monthly</p>
              </label>
              <label className='alcohol-box'>
                <input type="radio" className='alcohol' name='alcohol' value='Occasionally' checked={formData.alcohol === 'Occasionally'} onChange={changeHandler}></input>
                <p className='alcohol-p'>Occasionally</p>
              </label>
              <label className='alcohol-box'>
                <input type="radio" className='alcohol' name='alcohol' value='Never' checked={formData.alcohol === 'Never'} onChange={changeHandler}></input>
                <p className='alcohol-p'>Never</p>
              </label>
            </label>
          </div>
          <div className='button'>
            <button>Submit</button>
          </div>
          

        </form>
      </div>
    </div>
  );
}

export default App;
