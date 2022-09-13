import Link from "next/link";
import png from 'assets/images/img.png'

const X =()=>{
    return (
        <div>123
            <hr/>
            <Link href="/">
                <a>返回首页</a>
            </Link>
            <img src={png} alt=""/>
        </div>
    );
}
export default X