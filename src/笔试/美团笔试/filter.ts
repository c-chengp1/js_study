type BackendUser = {
    id: number,
    name: string,
    disabled: boolean
}

type FrontendUser = {
    value: number,
    label: string
}

// 将后端用户列表转换成前端用户列表，只保留启用(disabled = false)的用户
function transform(users?: BackendUser[]): FrontendUser[] {
    // todo
    const frontendUser = users?.filter(({ disabled }) => !disabled).map(({ id, name }) => {
        return {
            value: id,
            label: name
        }
    })
    return frontendUser || []
}

const backendUser: BackendUser[] = [{ id: 1, name: "jack", disabled: false }, { id: 2, name: "admin", disabled: true }]
