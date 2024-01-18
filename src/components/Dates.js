
export default function Dates({invoicenumber,invoicedate,duedate}){
    return (
      <>
        <article className="my-5 flex items-end
      justify-end">
<ul>
          <li className="p-1">
            <span className="font-bold">Inviocer number:</span></li>{invoicenumber}
          <li className="bg-grey-100"><span className="font-bold">Invoice date:</span></li>{invoicedate}
          <li className="p-1"><span className="font-bold">Due date:</span></li>{duedate}
        </ul>

</article>
      </>
    )

}
