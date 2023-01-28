import MainRoot from '../components/MainRoot'
import Home from '../pages/Home'
import PracticeAreas from '../pages/PracticeAreas'
import Testimonials from '../pages/Testimonials'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Add from '../pages/Add'

const ROUTES = [
    {
        path: "",
        element: <MainRoot />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "practiceares",
                element: <PracticeAreas />
            },
            {
                path: "testimonials",
                element: <Testimonials />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "add",
                element: <Add />
            }
        ]
    }
]

export default ROUTES