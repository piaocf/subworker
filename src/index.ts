import router from './router'
import reset from './router/service/reset'

export default {
    fetch: async (request: Request, env: Env): Promise<Response> =>
        router(request, env),
    scheduled: async (_: Event, env: Env) => reset(env),
}
