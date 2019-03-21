import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const song1 = new Audio("../sound/ring.wav")

function displayPopup() {
    document.getElementById("dialog").style.display = "block"
    song1.play()
}

function hidePopup() {
    document.getElementById("dialog").style.display = "none"
    song1.pause()
}

function CountdownTimer(obnm) {
    let endct = 0 // it is set to 1 when script starts
    let ctmnts = 0 // minutes
    let ctsecs = 0 // seconds
    let startchr = 0 // used to control when to read data from form, and script finished
    let ctpause = -1 //if -1, pause the script

    //get html elms.
    let el_showmns = document.getElementById('showmns')
    let el_showscs = document.getElementById('showscs')
    let el_mns = document.getElementById('time_min')
    let el_scs = document.getElementById('time_sec')

    let el_btnct = document.getElementById('btnct')
    let el_popup_btnct = document.getElementById('popup_btnct')

    let el_btnct_res = document.getElementById('btnct_res')
    let el_btnct_end = document.getElementById('btnct_end')

    let timeoutMan

    function resetCT() {
        document.getElementById('error_message')
        document.getElementById('timer_action').value = 'work'

        let timeInMinute = document.getElementById('work_time').value

        document.getElementById('time_min').value = timeInMinute
        startchr = 0 // used to control when to read data from form, and script finished
        ctpause = -1
        el_btnct.value = 'START'
        //window[obnm].countdownTimer()

        clearTimeout(timeoutMan)

        ctmnts = document.getElementById('time_min').value
        ctsecs = '00'
        el_showmns.innerHTML = ctmnts
        el_showscs.innerHTML = ctsecs
        document.title = "Plato Timer (" + ctmnts + ":" + ctsecs + ")"

        document.getElementById('btnct_end').style.display = 'none'
        document.getElementByClass('first_li').style.display = 'block'
        document.getElementByClass('second_li').style.display = 'block'
    }

    //to start/pause/resume Countdown Timer
    function startPauseCT() {
        //alert(startchr)
        if (document.getElementById('work_time').value === 0) {
            document.getElementById('error_message').html('Please enter work time in minutes')
            return
        }
        if (document.getElementById('break_time').value === 0) {
            document.getElementById('error_message').html('Please enter break time in minutes')
            return
        }
        document.getElementById('error_message').html('')
        hidePopup()

        let timer_action = document.getElementById('timer_action').value
        if (timer_action === 'work') {
            let timeInMinute = document.getElementById('work_time').value
        } else if (timer_action === 'break') {
            let timeInMinute = document.getElementById('break_time').value
        }

        document.getElementById('time_min').value = timeInMinute

        if (parseInt(el_mns.value) > 0 || parseInt(el_scs.value) > 0 || endct === 1) {
            ctpause *= -1
            if (ctpause === 1) { //Start and set next click as Pause

                //startchr =0
                //alert(startchr)

                el_btnct.value = 'PAUSE'
                window[obnm].countdownTimer()
            } else el_btnct.value = 'RESUME'
            document.getElementById('btnct_end').style.display = 'block'
            document.getElementByClass('first_li').hide()
            document.getElementByClass('second_li').hide()
        }
    }

    // HERE YOU CAN ADD TO EXECUTE JavaScript instructions WHEN COUNTDOWN TIMER REACHES TO 0
    function endCT() {
        // HERE ADD YOUR CODE

        return false
    }

    this.countdownTimer = function () {
        // if $startchr is 0, and form fields exists, gets data for minutes and seconds, and sets $startchr to 1
        //alert(startchr)
        if (startchr === 0 && el_mns && el_scs) {
            // makes sure the script uses integer numbers
            ctmnts = parseInt(el_mns.value)
            ctsecs = parseInt(el_scs.value)

            // if data not a number, sets the value to 0
            if (isNaN(ctmnts)) ctmnts = 0
            if (isNaN(ctsecs)) ctsecs = 0

            // rewrite data in form fields to be sure that the fields for minutes and seconds contain integer number
            el_mns.value = ctmnts
            el_scs.value = ctsecs
            startchr = 1
        }

        if (ctmnts > 0 || ctsecs > 0) endct = 1 //to can call endCT() at the ending

        // if minutes and seconds are 0, call endCT()
        if (ctmnts === 0 && ctsecs === 0 && endct === 1) {
            startchr = 0
            ctpause = -1
            endct = 0
            el_btnct.value = 'START'

            endCT()
            //alert('timer end')


            let timer_action = document.getElementById('timer_action').value
            if (timer_action === 'work') {
                document.getElementById('message_on_popup').html('READY TO TAKE A BREAK?')
                el_popup_btnct.value = 'START YOUR BREAK'
                document.getElementById('timer_action').value = 'break'
                displayPopup()
            } else {
                document.getElementById('message_on_popup').html('READY TO GET BACK TO WORK?')
                el_popup_btnct.value = 'START WORKING'
                document.getElementById('timer_action').value = 'work'
                displayPopup()
            }


        } else if (startchr === 1 && ctpause === 1) {
            // decrease seconds, and decrease minutes if seconds reach to 0
            ctsecs--
            if (ctsecs < 0) {
                if (ctmnts > 0) {
                    ctsecs = 59
                    ctmnts--
                } else {
                    ctsecs = 0
                    ctmnts = 0

                }
            }
            timeoutMan = setTimeout(obnm + '.countdownTimer()', 1000) //auto-calls this function after 1 seccond


        }

        ctsecs = twodigits(ctsecs)

        document.title = "Plato Timer (" + ctmnts + ":" + ctsecs + ")"

        // display the time in page
        el_showmns.innerHTML = ctmnts
        el_showscs.innerHTML = ctsecs
    }

    //set event to button that starts the Countdown Timer
    if (el_btnct) el_btnct.addEventListener('click', function () {
        startPauseCT()
    })

    if (el_popup_btnct) el_popup_btnct.addEventListener('click', function () {
        startPauseCT()
    })


    //restart Countdown Timer from the initial values
    if (el_btnct_res) el_btnct_res.addEventListener('click', function () {
        startchr = 0
        if (ctpause === -1) startPauseCT()
    })

    //ending Countdown Timer, sets 0 form data
    if (el_btnct_end) el_btnct_end.addEventListener('click', function () {

        resetCT()
        //document.getElementById('timer_action').val(0) 
        //el_mns.value =0 el_scs.value =0 startchr =0 startPauseCT()

    })
}

//set object of CountdownTimer class
const obCT = new CountdownTimer('obCT')

function twodigits(n) {

    if (n > 9) {
        n = "" + n
    } else if (n === 0) {
        n = "00"
    } else {
        n = "0" + n
    }

    return n
}
//displayPopup()

document.getElementById('work_time').change(function () {
    //startchr =0 
    ctmnts = document.getElementById('work_time').value
    document.getElementById('showmns').html(ctmnts)
    ctsecs = '00'
    document.title = "Plato Timer (" + ctmnts + ":" + ctsecs + ")"
})

const CalmDownPage = () => (
    <Layout>
        <SEO title="Calm Down" keywords={[`react`, `timer`, `javscript`]} />
        <div class="time-wrap">
            <div class="time-count"> <span id="showmns">20</span> <span>:</span> <span id="showscs">00</span> </div>
            <div class="time-schedule">
                <ul>
                    <li class="first_li">
                        <label>WORK FOR</label>
                        <span>
                            <input type="number" placeholder="20" value="20" name="work_time" id="work_time"/>
                        </span>
                        <label>MINS</label>
                    </li>
                    <li class="second_li">
                        <label>BREAK FOR</label>
                        <span>
                            <input type="number" placeholder="5"  value="5" name="break_time" id="break_time"/>
                        </span>
                        <label>MINS</label>
                    </li>
                    <li>
                        <div class="start-btn"> 
                            <input type="button" id="btnct" value="START" class="start-btn" />
                            <input type="hidden" name="time_min" id="time_min" value=""/>
                            <input type="hidden" name="time_sec" id="time_sec" value="0"/>
                            <input type="hidden" name="timer_action" value="work" id="timer_action"/>
                            <input type="button" id="btnct_end" value="RESET" class="reset-btn" style="display:none" />
                        </div>
                    </li>
                </ul>
                <div class="error_message" id="error_message"></div>
            </div>
        </div>
        <div id="dialog" title="" style="display:none">
            <p id="message_on_popup">READY TO TAKE A BREAK?</p>
            <input type="button" id="popup_btnct" value="START YOUR BREAK"  />
            
            <audio id="Mp3Me" loop="false" autoplay="true" >
                <source src="" type="audio/mpeg">Your browser does not support the audio element.</source>
            </audio>
        </div>
    </Layout>
)

export default CalmDownPage