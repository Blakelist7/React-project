import React from 'react'
import Footer from '../component/footer'
import Icon from '../component/icons'
import mainlogo from '../images/logo.png'
import micro1 from '../images/micro1.png'
import micro2 from '../images/micro2.png'
import java from '../images/java.png'
import apple from '../images/apple.png'
import android from '../images/andr.png'
import black from '../images/black.png'
import '../component/main1.css'

export function FooterContainer() {
    return (
        <Footer className="main4">
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <img src={mainlogo} alt='logo' className="mainlogo"></img>
                <h6 className="m-6">PT Dwidasa Samsara Indonesia</h6>
                <p className="lower">Ruko Jalur Sutera 29A No. 53
                Alam Sutera Serpong, Tangerang 15323</p>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contact</Footer.Title>
                    <p>Phone: +62.21.5314.1135</p>
                    <p>Fax: +62.21.5314.1135</p>
                    <p>Email: community@dwidasa.com</p>
                </Footer.Column>
                <Footer.Column>
                <img src={micro1} alt='microsoft'></img>
                </Footer.Column>
                <Footer.Column>
                <img src={micro2} alt='microsoft'></img>
                <img src={java} alt='java'></img>
                <img src={apple} alt='apple'></img>
                <img src={android} alt='Android'></img>
                <img src={black} alt='blackberry'></img>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}