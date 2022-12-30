import React, { useState, useEffect } from "react";

export default function Footer () {

    let [ year, setYear ] = useState(0);

    useEffect(() => setYear(  new Date().getUTCFullYear()  ), [] )


    return (
        <footer className="row">
            <div className="col pie letter-min"> Copyright &#169; MingMecca { year } </div>
        </footer>

    )
}
