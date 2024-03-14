export default function UserProfile({params}: any) {
    return (
        <div>
            <h1>Profile</h1>
            <hr/>
            <p className="text-3xl">Profile page
            <span className="p-2 rounded">{params.id}</span>
            </p>
        </div>
    )
}