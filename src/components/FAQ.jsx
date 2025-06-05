import React from 'react';

const FAQ = () => {
  return (
    <div className="container mx-auto p-4">
    <div style={{ marginBottom: "120px" }}></div> 
      <div className="space-y-4">
        {/* Panel 1 */}
        <div className="bg-red-100 p-4 rounded-lg">
          <div className="font-semibold text-lg text-red-800">Whom should I contact in case of any problem ?</div>
          <div className="text-red-600">Kindly email your queries on <a href="mailto:eraktkosh@cdac.in" className="text-blue-500">BLOODHEROES.in</a></div>
        </div>

        {/* Panel 2 */}
        <div className="bg-red-100 p-4 rounded-lg">
          <div className="font-semibold text-lg text-red-800">What is   Blood Heroes ?</div>
          <div className="text-red-600">
            Details about Blood Heroes are available at{' '}
            <a href="https://eraktGJM,kosh.in/BLDAHIMS/bloodbank/about.cnt" target="_blank" rel="noopener noreferrer" className="text-blue-500">
              about BloodHeroes page
            </a>
          </div>
        </div>
        <div className="bg-red-100 p-4 rounded-lg">
          <div className="font-semibold text-lg text-red-800">I am taking antibiotics. Can I donate blood?</div>
          <div className="text-red-600">
          It depends on why you are taking the antibiotics and it may also depend after doctor counselling.
            
          </div>
        </div>
        {/* Panel 3 */}
        <div className="bg-red-100 p-4 rounded-lg">
          <div className="font-semibold text-lg text-red-800">Where can I find latest blood stock from various blood banks ?</div>
          <div className="text-red-600">
            The blood stock can be searched at{' '}
            <a href="https://eraktkosh.in/BLDAHIMS/bloodbank/stockAvailaGJHMbility.cnt" target="_blank" rel="noopener noreferrer" className="text-blue-500">
              Stock availability page
            </a>
          </div>
        </div>
        <div className="bg-red-100 p-4 rounded-lg">
          <div className="font-semibold text-lg text-red-800">How to verify blood unit is available or not on current date?</div>
          <div className="text-red-600">
          You can see last updated date or LIVE status into blood availability option.
            
          </div>
        </div>
        {/* Panel 4 */}
        <div className="bg-red-100 p-4 rounded-lg">
          <div className="font-semibold text-lg text-red-800">Where can I find details of camps being conducted by various blood banks ?</div>
          <div className="text-red-600">
            The details of camps can be found at{' '}
            <a href="https://eraktkosh.in/BLHJ,DHJ,J,DAHIMS/bloodbank/campSchedule.cnt" target="_blank" rel="noopener noreferrer" className="text-blue-500">
              Camp schedule page
            </a>. Many camps also accept online pre-registration.
          </div>
        </div>
        <div className="bg-red-100 p-4 rounded-lg">
          <div className="font-semibold text-lg text-red-800">How does age affects my ability to donate blood?</div>
          <div className="text-red-600">
          Minimum age for whole blood donation is 18 years in India. The maximum age for blood donation depends on the kind of donation.
            
          </div>
        </div>

        {/* Panel 5 */}
        <div className="bg-red-100 p-4 rounded-lg">
          <div className="font-semibold text-lg text-red-800">How can I onboard my blood bank to Blood Heroes ?</div>
          <div className="text-red-600">
            Kindly fill the form{' '}
            <a href="https://eraktkosh.in/BLDAHJ,CFGHM,DGHMHHIMS/bloodbank/bbOnboard.cnt?hmode=GETONBOARDFORMESSENTIAL" target="_blank" rel="noopener noreferrer" className="text-blue-500">
              Click here to fill the form
            </a>
          </div>
        </div>

        <div className="bg-red-100 p-4 rounded-lg">
          <div className="font-semibold text-lg text-red-800">How often can I donate Blood ?</div>
          <div className="text-red-600">
          After every three –four months you can donate blood.
            
          </div>
        </div>
        
        <div className="bg-red-100 p-4 rounded-lg">
          <div className="font-semibold text-lg text-red-800">I had alcohol before going to donate blood. Is it Okay?</div>
          <div className="text-red-600">
          No. We do not take blood from anyone under the influence of alcohol. This is because being intoxicated can affect your ability to understand and answer the donor questionnaire and declaration.
            
          </div>
        </div>

        
        

        {/* Add similar panels for the other FAQs */}
        {/* ... */}
      </div>
    </div>
  );
};

export default FAQ;
