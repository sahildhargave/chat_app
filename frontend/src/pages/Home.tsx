import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Sidebar from '../components/Sidebar'
import ProtectedRoutes from '../components/ProtectedRoutes'

function Home(){
	return (
		<MainLayout>
			<ProtectedRoutes>
			<Sidebar/>
			Home Page
			</ProtectedRoutes>
		</MainLayout>
	)
}

export default Home