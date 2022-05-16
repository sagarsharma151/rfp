import React from 'react'
import RegisterForm from '../../../app-views/dashboards/RegisterForm'
import { Row, Col } from "antd";
import { useSelector } from 'react-redux'
import { CheckCircleOutlined, LeftOutlined } from '@ant-design/icons';

const backgroundURL= '/img/others/Frame.png'
const backgroundStyle = {
	backgroundImage: `linear-gradient(to bottom, rgba(55, 81, 255, 0.7), rgba(55, 81, 255, 0.7)), url(${backgroundURL})`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	opacity:'0.9',
	position: 'relative',
}

const RegisterOne = props => {
	const theme = useSelector(state => state.theme.currentTheme)
	return (

		<div className={`h-100 ${theme === 'light' ? 'bg-white' : ''}`}>
			<Row justify="center" className="align-items-stretch h-100">
			<Col xs={0} sm={0} md={0} lg={12}>
					<div className="d-flex flex-column  h-100" style={backgroundStyle}>
					{/* <img className="img-fluid h-100" src="/img/others/img-17.jpg" style={{opacity: "0.8", position: "relative"}} alt=""/> */}
						
						<Row justify="center" style={{position: "absolute"}}>
							<Col xs={0} sm={0} md={0} lg={20}>
							{/* <div className="text-left">
							<img src="/img/logo-white.png" alt="logo"/>
						</div> */}
						<div style={{marginTop: "50%"}}>
						<h1 className="text-white">“</h1>
								<p className="text-white">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
								<Row className="justify-content-between">
								<p className="text-white">Vincent Obi <CheckCircleOutlined className="bg-success" /></p>
								<p className="text-white"><img className="img-fluid h-100" src="/img/others/Vector 1.png" alt=""/></p>
								</Row>
						</div>
						
							</Col>
						</Row>
						{/* <div className="d-flex justify-content-end pb-4">
							<div>
								<a className="text-white" href="/#" onClick={e => e.preventDefault()}>Term & Conditions</a>
								<span className="mx-2 text-white"> | </span>
								<a className="text-white" href="/#" onClick={e => e.preventDefault()}>Privacy & Policy</a>
							</div>
						</div> */}
					</div>
				</Col>
				<Col xs={20} sm={20} md={24} lg={12}>
					<div className="container d-flex flex-column justify-content-center h-100">
						<Row justify="center" className="mt-2">
							<Col xs={24} sm={24} md={20} lg={12} xl={8}>
							<p><a href="/auth/login-1"><LeftOutlined className="mr-1" />Back</a></p>
							</Col>
							<Col xs={24} sm={24} md={20} lg={12} xl={8}>
							<p>Already have an account? <a href="/auth/login-1">Sign In</a></p>
							</Col>
						</Row>
						<Row justify="center" className="mt-5">
							<Col xs={24} sm={24} md={20} lg={16} xl={8}>
								<h1>Register</h1>
								<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
								
								<div className="">
									<RegisterForm {...props} />
								</div>
							</Col>
						</Row>
					</div>
				</Col>
				
			</Row>
		</div>

		// <div className="h-100" style={backgroundStyle}>
		// 	<div className="container d-flex flex-column justify-content-center h-100">
		// 		<Row justify="center">
		// 			<Col xs={20} sm={20} md={20} lg={7}>
		// 				<Card>
		// 					<div className="my-2">
		// 						<div className="text-center">
		// 						<img className="img-fluid" src={`/img/${theme === 'light' ? 'logo.png': 'logo-white.png'}`} alt="" />
		// 							<p className="text-muted">Create a new account:</p>
		// 						</div>
		// 						<Row justify="center">
		// 							<Col xs={24} sm={24} md={20} lg={20}>
		// 								<RegisterForm {...props}/>
		// 							</Col>
		// 						</Row>
		// 					</div>
		// 				</Card>
		// 			</Col>
		// 		</Row>
		// 	</div>
		// </div>
	)
}

export default RegisterOne
