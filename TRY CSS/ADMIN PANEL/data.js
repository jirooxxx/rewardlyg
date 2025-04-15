async function loadUsers() {
    const usersRef = collection(db, "users");
    const querySnapshot = await getDocs(usersRef);
    
    console.log('Users data:', querySnapshot);  // Log the snapshot for debugging
    
    const usersList = document.getElementById('usersList');
    usersList.innerHTML = "";  // Clear any previous list
    
    querySnapshot.forEach((doc) => {
        const userData = doc.data();
        console.log('User data:', userData);  // Log each user's data for debugging
        const listItem = document.createElement('li');
        listItem.classList.add('mb-4');
        listItem.innerHTML = `
            <div class="p-4 bg-gray-100 rounded-md">
                <div class="flex justify-between">
                    <span>User: ${userData.firstName} ${userData.lastName}</span>
                    <span>Balance: ₱${userData.balance}</span>
                </div>
                <input type="number" id="balance-${doc.id}" class="p-2 border border-gray-300 rounded-md mt-2" placeholder="Update Balance" />
                <button onclick="updateBalance('${doc.id}')" class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-2">Update Balance</button>
            </div>
        `;
        usersList.appendChild(listItem);
    });
}
