import { User } from "../utils/types"

interface filteredItems {
  filteredItems:User[]
}

const DeviceList = ({filteredItems}:filteredItems) => {

  return (
    <div>
        <table className="min-w-full text-left">
  <thead className="border-b">
    <tr>
      <th className="px-4 py-4">ID</th>
      <th className="px-4 py-4">Name</th>
      <th className="px-4 py-4">UniqueID</th>
      <th className="px-4 py-4">Status</th>
      <th className="px-4 py-4">lastUpdate</th>
    </tr>
  </thead>
  <tbody>
      {filteredItems.map((user) => 
        <tr
        data-testid={`data-table-item-${user.id}`}
        key={user.uniqueId}
        className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100">
          <td className="px-4 py-4">{user.id}</td>
          <td className="px-4 py-4">{user.name}</td>
          <td className="px-4 py-4">{user.uniqueId}</td>
          <td className="px-4 py-4">{user.status}</td>
          <td className="px-4 py-4">{user.lastUpdate}</td>
        </tr>
      )}
  </tbody>
</table>
    </div>
  )
}

export default DeviceList