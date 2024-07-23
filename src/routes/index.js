import authRouter from './auth'
import userRouter from './user'
import usersRouter from './users'
import flightRouter from './flight'
import airportRouter from './airport'
import airlineRouter from './airline'
import testRouter from './test'


const initRoutes = (app) => {
    app.use('/api/v1/auth', authRouter)
    app.use('/api/v1/user', userRouter)
    app.use('/api/v1/flight', flightRouter)
    app.use('/api/v1/airport', airportRouter)
    app.use('/api/v1/users', usersRouter)
    app.use('/api/v1/airline', airlineRouter)

    app.use('/api/v1/test', testRouter)

    return app.use('/', (req, res) => {
        res.send('server on ...')
    })
}

export default initRoutes





