
export default function Clientdetails({clientname,clientaddress}){
    return (
      <>
        <section className="mt-10">
<h2 className="text-2xl uppercase font-bold mb-1">{clientname}</h2>
<h2>{clientaddress}</h2>
                  </section>
      </>
    )

}
