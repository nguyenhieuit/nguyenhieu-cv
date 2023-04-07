import { FaInfo, FaLocationArrow, FaMailBulk, FaPhone } from "react-icons/fa";
import imgAvt from "../../images/279000962_1333101163857501_9013055863292213718_n.jpg";

export default function ContentTop() {
    return (
        <>
            <div className="content-top">
                <div className="infor-left">
                    <h1>Nguyen Hieu</h1>
                    <h2>Web developer</h2>
                    <div>
                        <h3>PROFILE</h3>
                        <div className="line"></div>
                    </div>
                    <div className="profile">
                        <ul>
                            <li>
                                <i>
                                    <FaPhone />
                                </i>
                                0777974937
                            </li>
                            <li>
                                <i>
                                    <FaMailBulk />
                                </i>
                                nguyenhieuitdtu@hotmail.com
                            </li>
                            <li>
                                <i>
                                    <FaInfo />
                                </i>
                                <a href="https://facebook.com/heoitdtu">
                                    https://facebook.com/heoitdtu
                                </a>
                            </li>
                            <li>
                                <i>
                                    <FaLocationArrow />
                                </i>
                                Tam Xuan Commune 2, Nui Thanh District, Quang
                                Nam Province
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="infor-right">
                    <img alt="img" src={imgAvt} />
                </div>
            </div>
        </>
    );
}
