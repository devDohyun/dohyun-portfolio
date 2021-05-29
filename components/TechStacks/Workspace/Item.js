import style from './index.module.scss'


const WorkspaceItem = ({ name, period, as }) => {
    return (
        <div className={style.workspace_item}>
            {name}
        </div>
    )
}


export default WorkspaceItem