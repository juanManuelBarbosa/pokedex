import Lottie from 'lottie-react-web'
import animationData from '../../public/Animation - 1710963994443.json'
const loading = ()=>{
    return <>
        <div className="LoadingContainer">
              <p className="messageLoadingContainer">Cargando..</p>
              <Lottie options={{ animationData, loop: true }} width={200} />
              </div>
    </>
}

export default loading