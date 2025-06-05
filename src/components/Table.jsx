import React from 'react';

const bloodBanks = [
  { id: 1, district: "Kolkata", name: "Institute of Blood Transfusion Medicine & Immuno Haematology (Central Blood Centre) - BCSU", incharge: "Dr. Swapan Saren, Director", phone: "033 2351 0620" },
  { id: 2, district: "Kolkata", name: "SSKM Hospital Blood Centre - BCSU", incharge: "Dr. Pratik Dey, MOIC", phone: "033 2204 1233" },
  { id: 3, district: "Kolkata", name: "Calcutta Medical College & Hospital Blood Centre - BCSU", incharge: "Dr. Biswajit Haldar, MOIC", phone: "9433737234/9432168577" },
  { id: 4, district: "Kolkata", name: "R.G. Kar Medical College & Hospital Centre - BCSU", incharge: "Dr. Malay Ghosh, MOIC", phone: "6291661411" },
  { id: 5, district: "Kolkata", name: "N.R.S. Medical College & Hospital Blood Centre - BCSU", incharge: "Dr. Dilip Kumar Panda, MOIC", phone: "6291372390" },
  { id: 6, district: "Kolkata", name: "Calcutta National Medical College & Hospital Centre - BCSU", incharge: "Dr. Bibhas Biswas, MOIC", phone: "9830064024/8981608604" },
  { id: 7, district: "Kolkata", name: "Dr.B.C.Roy PGIPS Blood Centre - BCSU", incharge: "Dr. Sukumar Dutta, MOIC", phone: "9432305174" },
  { id: 8, district: "Kolkata", name: "ESI Hospital, Maniktala Blood Centre - BCSU", incharge: "Dr.Md Azharuddin, MOIC", phone: "9932116714" },
  { id: 9, district: "Kolkata", name: "Chittaranjan National Cancer Institute Blood Centre", incharge: "Dr. Smita Gupta, MOIC", phone: "033 2476-5101, Ext. 363" },
  { id: 10, district: "Howrah", name: "Howrah Dist. Hospital Blood Centre - BCSU", incharge: "Dr. Shankar Karmakar", phone: "9831120122" },
  { id: 11, district: "Howrah", name: "Uluberia S.D. Hospital Blood Centre", incharge: "Dr. Ranjan Maity, MOIC", phone: "9830619139" },
  { id: 12, district: "South 24 Pgs", name: "M.R. Bangur Dist. Hospital Blood Centre", incharge: "Dr. Krishna Kanta Barui, MOIC", phone: "9474044939" },
  { id: 13, district: "South 24 Pgs", name: "Canning S.D.Hospital Blood Centre- BCSU", incharge: "Dr. Tanmoy Ray, MOIC", phone: "9434319374/8820731069" },
  { id: 14, district: "South 24 Pgs", name: "Metiabruz SSH Blood Centre", incharge: "Dr. Nihar Ranjan Sardar, MOIC", phone: "9734284254" },
  { id: 15, district: "South 24 Pgs", name: "Baruipur S.D.Hospital Blood Centre", incharge: "Dr. Goutam Mukherjee, MOIC", phone: "9681440689" },
  { id: 16, district: "Diamond Harbour HD", name: "Diamond Harbour Govt. MCH Blood Centre - BCSU", incharge: "Dr. Suravi Mandi, MOIC", phone: "9832880657/9382413645" },
  { id: 17, district: "Diamond Harbour HD", name: "Kakdwip S.D.Hospital Blood Centre", incharge: "Dr. Pinakesh Das, MOIC", phone: "9432976463" },
  { id: 18, district: "Purba Medinipur", name: "Tamluk Dist. Hospital Blood Centre - BCSU", incharge: "Dr. Tushar Kanti Maity, MOIC", phone: "7548013388" },
  { id: 19, district: "Purba Medinipur", name: "Haldia S.D. Hospital Blood Centre", incharge: "Dr. Sutapa Sarkar, MOIC", phone: "7586840100" },
  { id: 20, district: "Purba Medinipur", name: "Egra SSH Blood Centre", incharge: "Dr. Dhriti Bhattacharya, MOIC", phone: "9775736053" },
  { id: 21, district: "Purba Medinipur", name: "Panskura SSH Blood Centre", incharge: "Dr. Paromita Chatterjee, MOIC", phone: "9830464893" },
  { id: 22, district: "Nandigram HD", name: "Contai S.D.Hospital Blood Centre", incharge: "Dr. Aniruddha Mridha, MOIC", phone: "9434503552/8918080622" },
  { id: 23, district: "Nandigram HD", name: "Nandigram SSH Blood Centre - BCSU", incharge: "Dr. Saptarshi Mondal, MOIC", phone: "9733677383" },
  { id: 24, district: "Paschim Medinipur", name: "Medinipur Medical College & Hospital Blood Centre - BCSU", incharge: "Dr. Basori Mohan Maity, MOIC", phone: "03222 261007/7407201505" },
  { id: 25, district: "Paschim Medinipur", name: "Kharagpur S.D.Hospital Blood Centre", incharge: "Dr. Jhuma Mukherjee, MOIC", phone: "9434005862" },
  { id: 26, district: "Paschim Medinipur", name: "Ghatal S.D.Hospital Blood Centre", incharge: "Dr. Durga Sankar Das, MOIC", phone: "9474896980" },
  { id: 27, district: "Paschim Medinipur", name: "Debra SSH Blood Centre", incharge: "Dr. Soumya Singha Roy,MOIC", phone: "9434480537" },
  { id: 28, district: "Jhargram", name: "Jhargram Dist. Hospital Blood Centre-BCSU", incharge: "Dr. Protima Moi, MOIC", phone: "9434177966" },
  { id: 29, district: "Jhargram", name: "Nayagram SSH Blood Centre", incharge: "Dr. Baburam Murmu, MOIC", phone: "9434134690" },
  { id: 30, district: "Jhargram", name: "Gopiballavpur SSH Blood Centre", incharge: "Dr. Kartick Naskar, MOIC", phone: "9734658881" },
  { id: 31, district: "Bankura", name: "Bankura Sammilani Medical College & Hospital Blood Centre - BCSU", incharge: "Dr. Sudarshan Saren,MOIC", phone: "9434149948" },
  { id: 32, district: "Bankura", name: "Khatra S.D.Hospital Blood Centre", incharge: "Dr. Subrata Biswas, MOIC", phone: "9434160366" },
  { id: 33, district: "Bankura", name: "Barjora SSH Blood Centre", incharge: "Dr. Parna Bhoumik, MOIC", phone: "9477583834/9433390876" },
  { id: 34, district: "Bankura", name: "Onda SSH Blood Centre", incharge: "Dr. Bibekananda Modak, MOIC", phone: "9434364147" },
  { id: 35, district: "Bankura", name: "Chhatna SSH Blood Centre", incharge: "Dr. Sujit Kumar Dutta, MOIC", phone: "9433226273/6294901415" },
  { id: 36, district: "Bishnupur HD", name: "Bishnupur Dist. Hospital Blood Centre", incharge: "Dr. Prasun Banerjee, MOIC", phone: "9330229191" },
  { id: 37, district: "Purulia", name: "Purulia Dist. Hospital (Deben Mahato) Blood Centre", incharge: "Dr. Tapas Kumar Roy, MOIC", phone: "9434522458" },
  { id: 38, district: "Purulia", name: "Raghunathpur SSH Blood Centre", incharge: "Dr. Susanta Mondal, MOIC", phone: "7797487244" },
  { id: 39, district: "Hooghly", name: "Chinsura (Imambara) Dist. Hospital (Hooghly Dist Hospital) Blood Centre - BCSU", incharge: "Dr. Swarup Sadhu, MOIC", phone: "7003150460" },
  { id: 40, district: "Hooghly", name: "Arambagh S.D.Hospital Blood Centre", incharge: "Dr. Gouranga Sarkar, MOIC", phone: "9434732968" },
  { id: 41, district: "Hooghly", name: "Chandannagar S.D.Hospital Blood Centre", incharge: "Dr. Aparajita Maji (M", phone: "9434732968" },
  { "id": 42, "district": "Hooghly", "name": "Serampore S.D.Hospital (Walsh) Blood Centre", "incharge": "Dr. Pranabesh Mukherjee, MOIC", "phone": "9804368822" },
  { "id": 43, "district": "North 24 Pgs", "name": "College of Medicine & Sagore Dutta Hospital Blood Centre - BCSU", "incharge": "Dr. Priyanka Banerjee, MOIC", "phone": "8902566390/6290147785" },
  { "id": 44, "district": "North 24 Pgs", "name": "Barasat Dist. Hospital Blood Centre - BCSU", "incharge": "Dr. Sumitra Haldar, MOIC", "phone": "9143454656" },
  { "id": 45, "district": "North 24 Pgs", "name": "Salt Lake S.D.Hospital Blood Centre", "incharge": "Dr. Debanjali Chakraborty, MOIC", "phone": "8697568169" },
  { "id": 46, "district": "North 24 Pgs", "name": "Bongaon (Dr. J.R. Dhar) S.D.Hospital Blood Centre", "incharge": "Dr. Gopal Poddar, MOIC", "phone": "9433169164" },
  { "id": 47, "district": "North 24 Pgs", "name": "Barrackpore (Dr. B.N. Bose) S.D.Hospital Blood Centre", "incharge": "Dr. Kaushik Kumar Sarangi, MOIC", "phone": "9051239946" },
  { "id": 48, "district": "Basirhat HD", "name": "Basirhat Dist. Hospital Blood Centre - BCSU", "incharge": "Dr. Bijaya Bhattacharjee, MOIC", "phone": "8670524965/9476192797" },
  { "id": 49, "district": "Nadia", "name": "CoM & Jawaharlal Nehru Memorial (JNM) Hospital Blood Centre - BCSU", "incharge": "Dr. Barnik Chaudhury, MOIC & Asso. Prof. (Pathology)", "phone": "9230614248" },
  { "id": 50, "district": "Nadia", "name": "Gandhi Memorial Hospital Blood Centre", "incharge": "Dr. Smita Chakraborty, MOIC", "phone": "9433792699/9433118159" },
  { "id": 51, "district": "Nadia", "name": "Krishnanagar (Saktinagar) Nadia Dist. Hospital Blood Centre - BCSU", "incharge": "Dr. Somnath Sarkar, MOIC", "phone": "9836697620" },
  { "id": 52, "district": "Nadia", "name": "Ranaghat S.D. Hospital Blood Centre", "incharge": "Dr. Surajit Baskey, MOIC", "phone": "9733737288" },
  { "id": 53, "district": "Nadia", "name": "Tehatta S.D.Hospital Blood Centre", "incharge": "Dr. Ramchand Murmu", "phone": "9800671828" },
  { "id": 54, "district": "Nadia", "name": "Nabadwip SGH Blood Centre", "incharge": "Dr. Manabendra Mondal, MOIC", "phone": "9733022688" },
  { "id": 55, "district": "Purba Bardhaman", "name": "Burdwan Medical College & Hospital Blood Centre - BCSU", "incharge": "Dr. Swapan Banik, MOIC", "phone": "9433282603" },
  { "id": 56, "district": "Purba Bardhaman", "name": "Katwa S.D.Hospital (Hemraj) Blood Centre", "incharge": "Dr. Banibrata Acharya, MOIC", "phone": "9434387842" },
  { "id": 57, "district": "Purba Bardhaman", "name": "Kalna S.D.Hospital Blood Centre", "incharge": "Dr. Partha Sarathi Ganguly, MOIC", "phone": "9433273617 / 9126442648" },
  { "id": 58, "district": "Paschim Bardhaman", "name": "Durgapur S.D.Hospital Blood Centre", "incharge": "Dr. Karabi Kundu, MOIC", "phone": "9434246558" },
  { "id": 59, "district": "Paschim Bardhaman", "name": "Asansol Dist. Hospital Blood Centre - BCSU", "incharge": "Dr. Sanjit Chatterjee, MOIC", "phone": "9474347380" },
  { "id": 60, "district": "Birbhum", "name": "Suri Dist. Hospital Blood Centre - BCSU", "incharge": "Dr. Ardhendu Roy, MOIC", "phone": "9830388785" },
  { "id": 61, "district": "Birbhum", "name": "Bolpur S.D.Hospital Blood Centre", "incharge": "Dr. Tirthankar Chanda, MOIC", "phone": "9232362053" },
  { "id": 62, "district": "Rampurhat HD", "name": "Rampurhat Govt. MCH Blood Centre - BCSU", "incharge": "Dr. Prosanta Sana, MOIC", "phone": "7586070974" },
  { "id": 63, "district": "Murshidabad", "name": "Murshidabad Medical College & Hospital Blood Centre - BCSU", "incharge": "Dr. Debashis Goswami, MOIC", "phone": "9434000703" },
  { "id": 64, "district": "Murshidabad", "name": "Jangipur S.D.Hospital Blood Centre", "incharge": "Dr. Mita Bandyopadhyay, MOIC", "phone": "9474316022" },
  { "id": 65, "district": "Murshidabad", "name": "Kandi S.D.Hospital Blood Centre", "incharge": "Dr. Saibal Bhattacharya, MOIC", "phone": "9433329361" },
  { "id": 66, "district": "Murshidabad", "name": "Lalbagh S.D.Hospital Blood Centre", "incharge": "Dr. Apurba Chattoraj, MOIC", "phone": "9434481693" },
  { "id": 67, "district": "Murshidabad", "name": "Domkal SSH Blood Centre", "incharge": "Dr. Cynthia Adhikari, MOIC", "phone": "7278200259" },
  { "id": 68, "district": "Murshidabad", "name": "Sagardighi SSH Blood Centre", "incharge": "Dr. Md.Golam Mustafa Gazi, MOIC", "phone": "9641542920" },
  { "id": 69, "district": "Malda", "name": "Malda Medical College & Hospital Blood Centre - BCSU", "incharge": "Dr. Mozible Haque, MOIC", "phone": "9932404168 / 6294946088" },
  { "id": 70, "district": "Malda", "name": "Chanchal SSH Blood Centre", "incharge": "Dr. Pradip Kumar Mondal, MOIC", "phone": "9434154741" },
  { "id": 71, "district": "Dakshin Dinajpur", "name": "Balurghat Dist. Hospital Blood Centre - BCSU", "incharge": "Dr. Debabrata De, MOIC", "phone": "9433356304 / 6291564144" },
  { "id": 72, "district": "Dakshin Dinajpur", "name": "Gangarampur S.D.Hospital Blood Centre", "incharge": "Dr. Brijesh Saha, MOIC", "phone": "9153320600" },
  { "id": 73, "district": "Uttar Dinajpur", "name": "Raiganj Govt. Medical College & Hospital Blood Centre - BCSU", "incharge": "Dr. Chandana Patra, MOIC", "phone": "7890285780/9874531408" },
  { "id": 74, "district": "Uttar Dinajpur", "name": "Islampur S.D.Hospital Blood Centre", "incharge": "Dr. Kaustav Nandi, MOIC", "phone": "9064978986" },
  { "id": 75, "district": "Jalpaiguri", "name": "Jalpaiguri Dist. Hospital Blood Centre - BCSU", "incharge": "Dr. Anindya Praksh Ghosh, MOIC", "phone": "9434454619" },
  { "id": 76, "district": "Jalpaiguri", "name": "Mal SSH Blood Centre", "incharge": "Dr. Biswanath Tudu, MOIC", "phone": "9002650442" },
  { "id": 77, "district": "Coochbehar", "name": "Coochbehar Dist. Hospital (MJN) Blood Centre - BCSU", "incharge": "Dr. Sukanya Bag, MOIC", "phone": "9635448882" },
  { "id": 78, "district": "Coochbehar", "name": "Dinhata S.D.Hospital Blood Centre", "incharge": "Dr. Nirmalya Mandal, MOIC", "phone": "6289514312" },
  { "id": 79, "district": "Coochbehar", "name": "Mathabhanga S.D.Hospital Blood Centre", "incharge": "Dr. Pijush Santra, MOIC", "phone": "8101785479" },
  { "id": 80, "district": "Alipurduar", "name": "Alipurduar Dist. Hospital Blood Centre - BCSU", "incharge": "Dr. Uttam Kanri, MOIC", "phone": "9153196872/8170010090" },
  { "id": 81, "district": "Alipurduar", "name": "Falakata SSH Blood Centre", "incharge": "Dr. Sukanta Karmakar, MOIC", "phone": "9563239610/9635001537" },
  { "id": 82, "district": "Alipurduar", "name": "Birpara SGH Blood Centre", "incharge": "Dr. Anjan Mallick, MOIC", "phone": "9083653621" },
  { "id": 83, "district": "Darjeeling", "name": "North Bengal Medical College & Hospital Blood Centre - BCSU", "incharge": "Dr. Mridumay Das, MOIC", "phone": "9434121152" },
  { "id": 84, "district": "Darjeeling", "name": "Darjeeling Dist. Hospital Blood Centre", "incharge": "Dr. Kaushik Roy, MOIC", "phone": "9674894042" },
  { "id": 85, "district": "Darjeeling", "name": "Kurseong S.D.Hospital Blood Centre", "incharge": "Dr. Partha Kundu Poddar, MOIC", "phone": "8910812757/9831177549" },
  { "id": 86, "district": "Darjeeling", "name": "Siliguri Dist. Hospital Blood Centre", "incharge": "Dr. Jayanta Hansda, MOIC", "phone": "9932965219" },
  { "id": 87, "district": "Kalimpong", "name": "Kalimpong Dist. Hospital Blood Centre", "incharge": "Dr. Swarup Khan, MOIC", "phone": "9614847359" }
];

const Table = () => {
  return (
    <div>
     <h1 className="mx-auto px-12 py-2 text-center bg-[#1976D2] text-white">Blood Bank List</h1>
     <div style={{ marginBottom: "20px" }}></div> 

      <table className="table-auto border-collapse w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2">District</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Incharge</th>
            <th className="border px-4 py-2">Phone</th>
          </tr>
        </thead>
        <tbody>
          {bloodBanks.map(bank => (
            <tr key={bank.id}>
              <td className="border px-4 py-2">{bank.district}</td>
              <td className="border px-4 py-2">{bank.name}</td>
              <td className="border px-4 py-2">{bank.incharge}</td>
              <td className="border px-4 py-2">{bank.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;