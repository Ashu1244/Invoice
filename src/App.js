import {useState} from "react";
import Dates from "./components/Dates";
import Footer from "./components/Footer";
import Table from "./components/Table";
import Notes from "./components/Notes";
import Clientdetails from "./components/Clientdetails";
import Maindetails from "./components/Maindetails";
import Header from "./components/Header";


function App() {
  const [showInvoice, setShowInvoice]= useState(false)

  const [name ,setName] = useState("")
  const [address,setAddress] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const [bankname,setBankname] = useState("")
  const [bankaccount,setBankAccount] = useState("")
  const [clientname,setClientName] = useState("")
  const [clientaddress,setClientAddress] = useState("")
  const [invoicenumber,setInvoiceNumber] = useState("")
  const [invoicedate,setInvoiceDate] = useState("")
  const [duedate,setDuedate] = useState("")
  const [notes,setNotes] = useState("")
  const [website,setWebsite] = useState("")

  const handlePrint= () => {
    window.print()
  }

  return (
    <>
    <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl
    bg-white rounded shadow">

    {showInvoice ? <div>
      <Header handlePrint={handlePrint}/>
    

          <Maindetails name={name} address={address}/>
       <Clientdetails clientname={clientname} clientaddress={clientaddress}/>
                <Dates invoicenumber={invoicenumber} invoicedate={invoicedate} duedate={duedate}/>
                <Table/>
           <Notes notes={notes}/>

       <Footer name={name} email={email} address={address} website={website}
       phone={phone}
       bankaccount={bankaccount}
       bankname={bankname}/>
       <button onClick={()=>
       setShowInvoice(false)} className=" mt-5 bg-red-400 text-white font-bold py-2 px-8
 rounded shadow border-2
 border-blue-500 
 hover:bg-transparent hover:text-blue-500
 transition-all duration-300">
        Edit information 
       </button>
      
       </div> : (
        <>
        {/*name, address, email,phone,bankname,
        bank account number,website,client name,client
        address, invoice number,invoice date,due
        date, notes.

       */}
       <div className="flex flex-col justify-center">
        
        <label htmlFor="name">Enter your name</label>
       <input 
        type=" text"
        name="text"
        id="name"
        placeholder="Enter your name 🤔"
        autoComplete="off"
        value={name}
        onChange={(e)=> setName(e.target.value)}
        />

<label htmlFor="address">Enter your address</label>
       <input 
        type=" text"
        name="address"
        id="address"
        placeholder="Enter your address🤔"
        autoComplete="off"
        value={address}
        onChange={(e)=> setAddress(e.target.value)}
        />

<label htmlFor="email">Enter your email</label>
       <input 
        type=" email"
        name="email"
        id="email"
        placeholder="Enter your email 🤔"
        autoComplete="off"
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        />

<label htmlFor="website">Enter your website</label>
       <input 
        type="url"
        name="website"
        id="website"
        placeholder="Enter your website 🤔"
        autoComplete="off"
        value={website}
        onChange={(e)=> setWebsite(e.target.value)}
        />

<label htmlFor="phone">Enter your phone number</label>
       <input 
        type="text"
        name="phone"
        id="phone"
        placeholder="Enter your phone number🤔"
        autoComplete="off"
        value={phone}
        onChange={(e)=> setPhone(e.target.value)}
        />

<label htmlFor="bankname">Enter your bankname</label>
       <input 
        type="text"
        name="bankname"
        id="bankname"
        placeholder="Enter your bankname 🤔"
        autoComplete="off"
        value={bankname}
        onChange={(e)=> setBankname(e.target.value)}
        />

        <label htmlFor="bankaccount">Enter your bank account</label>
       <input 
        type="text"
        name="bankaccount"
        id="bankaccount"
        placeholder="Enter your account 🤔"
        autoComplete="off"
        value={bankaccount}
        onChange={(e)=> setBankAccount(e.target.value)}
        />
 
 <label htmlFor="clientname">Enter your client name</label>
       <input 
        type="text"
        name="clientname"
        id="clientname"
        placeholder="Enter your client name 🤔"
        autoComplete="off"
        value={clientname}
        onChange={(e)=> setClientName(e.target.value)}
        />

<label htmlFor="clientaddress">Enter your client address</label>
       <input 
        type="text"
        name="clientaddress"
        id="clientaddress"
        placeholder="Enter your client address 🤔"
        autoComplete="off"
        value={clientaddress}
        onChange={(e)=> setClientAddress(e.target.value)}
        />
        
       

<label htmlFor="invoicenumber">Enter the invoice number</label>
       <input 
        type="text"
        name="invoicenumber"
        id="invoicenumber"
        placeholder="Enter your invoice number 🤔"
        autoComplete="off"
        value={invoicenumber}
        onChange={(e)=> setInvoiceNumber(e.target.value)}
        />
        
        <label htmlFor="invoicedate">Enter the invoice date</label>
       <input 
        type="date"
        name="invoicedate"
        id="invoicedate"
        placeholder="Enter your invoice date 🤔"
        autoComplete="off"
        value={invoicedate}
        onChange={(e)=> setInvoiceDate(e.target.value)}
        />

<label htmlFor="duedate">Enter the duedate</label>
       <input 
        type="date"
        name="duedate"
        id="duedate"
        placeholder="Enter your due date 🤔"
        autoComplete="off"
        value={duedate}
        onChange={(e)=> setDuedate(e.target.value)}
        />

      <label htmlFor="notes">Additional notes</label>
      <textarea name="notes" id="notes" cols="30" rows="10"
      placeholder="Additional notes to the client" value={notes} onChange={(e)=> setNotes(e.target.value)}></textarea>

        
 <button onClick={() =>
  setShowInvoice(true)}className="mt-3 bg-purple-500 text-white font-bold py-2 px-8
 rounded shadow border-2
 border-blue-500 
 hover:bg-transparent hover:text-blue-500
 transition-all duration-300">Preview the Invoice </button>
       </div>
        </>
       )}
    </main>
    </>
  );
}

export default App;
