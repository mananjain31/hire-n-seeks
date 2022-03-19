import { Modal } from "@mui/material"
import emailsentSVG from '../../assets/email-sent-green.svg'
import './EmailConfirmationModal.scss'

export const EmailConfirmationModal = () => {
    return (
        <Modal open>
            <div className="modal-container">
                <div className="modal-content">
                    <img src={emailsentSVG}></img>
                    <h2>Email Confirmation</h2>
                    <p>We have sent email to <a href="#">abc123@gmail.com</a>. Please confirm your email by clicking the link we have sent you.</p>
                    <hr></hr>
                    <p className="resend-email">If you not got any email <a href="#">Resend Confirmation Email</a></p>
                </div>

            </div>

        </Modal>
    )


}