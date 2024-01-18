
export default function Clientdetails({clientname,clientaddress}){
    return (
      <>
        <section className="mt-5">
<h2 className="text-xl uppercase">{clientname}</h2>
<h2>{clientaddress}</h2>
                  </section>
      </>
    )

}
