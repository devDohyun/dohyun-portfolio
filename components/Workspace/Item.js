import style from './Item.module.scss'


const WorkspaceItem = ({ name, period, position }) => {
    return (
        <div className={style.workspace_item}>
            {name}
        </div>
    )
}


export default WorkspaceItem