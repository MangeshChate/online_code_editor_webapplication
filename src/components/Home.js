import React, { useState, useRef, useEffect } from 'react'
import AceEditor from "react-ace";


import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/mode-html';

import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-javascript';




export default function Home() {



  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  const iframeRef = useRef(null);

  useEffect(() => {
    const outputDoc = iframeRef.current.contentDocument;
    outputDoc.body.innerHTML = html + '<style>' + css + '</style>';
    const script = document.createElement('script');
    script.textContent = js;
    outputDoc.body.appendChild(script);
  }, [html, css, js]);
  







  return (
    <div className='container-fluid mt-4 ' >
      <div className='justify-content-end d-flex'>



      </div>

      <div className="row d-flex justify-content-center flex-wrap">
        <div className="col-lg-4 col-md-12 col-sm-12 mt-3">
          <div className=" bg-light text-info-emphasis  shadow" style={{ height: "30rem", border: "2px solid grey" }}>
            <div className="container-fluid bg-dark text-light  p-2 ">

              <span className='fw-bold font-monospace'>HTML</span>


            </div>


            <AceEditor

              mode="html"
              theme="twilight"
              name="my-editor"
              onChange={(value) => setHtml(value)}
              fontSize={18}
              editorProps={{ $blockScrolling: true }}
              width='100%'
              height='434px'
             

            />

            <style jsx>{`
      
        .ace_editor {
          font-family:"monospace" ;
          
        }
        
      
      
      
      `}</style>

          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 mt-3 ">
          <div className=" bg-light text-info-emphasis  shadow" style={{ height: "30rem", border: "2px solid grey" }}>
            <div className="container-fluid bg-dark text-light  p-2 ">

              <span className='fw-bold font-monospace'>CSS</span>


            </div>
            <AceEditor

              mode="css"
              theme="twilight"
              name="my-editor"
              onChange={(value) => setCss(value)}
              fontSize={18}
              editorProps={{ $blockScrolling: true }}
              width='100%'
              height='434px'
        

            />

            <style jsx>{`

.ace_editor {
font-family:"monospace" ;

}




`}</style>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 mt-3">
          <div className=" bg-light text-info-emphasis  shadow" style={{ height: "30rem", border: "2px solid grey" }}>
            <div className="container-fluid bg-dark text-light  p-2 ">

              <span className='fw-bold font-monospace'>JAVASCRIPT</span>


            </div>
            <AceEditor

              mode="javascript"
              theme="twilight"
              name="my-editor"
              onChange={(value) => setJs(value)}
              fontSize={18}
              editorProps={{ $blockScrolling: true }}
              width='100%'
              height='434px'
             

            />

            <style jsx>{`

.ace_editor {
font-family:"monospace" ;

}




`}</style>
          </div>
        </div>

      </div>



      <div className="col-lg-12 col-md-12  col-sm-12 bg-light text-info-emphasis rounded-4 mt-4 mb-5 shadow" style={{ height: "30rem", border: "2px solid grey" }}>
        <div className="container-fluid bg-dark text-light rounded-top-3 p-2 ">

          <span className='fw-bold font-monospace'>OUTPUT</span>


        </div>

        <iframe className='container-fluid' style={{ height: "26rem" }} id="output" ref={iframeRef}></iframe>


      </div>



    </div>
  )
}
