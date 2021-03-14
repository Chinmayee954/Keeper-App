import React from "react";

var currentDate = new Date();
var currentYear = currentDate.getFullYear();

function Footer()
{
    return (
        <footer><p>Copyright {currentYear}</p></footer>
    )
}

export default Footer;