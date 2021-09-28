import User from '../model/userSchema.js'

export const getUser = async(req, res)=>{

    try {
        let user = await User.find()
        res.json(user)
    } catch (error) {
        res.json({message: error.message})
    }          
}

export const addUsers = async(req, res)=>{
        const user = req.body;
        console.log(user)
        const newUser = new User(user)

        try {
            await newUser.save()
            res.json(newUser)
        } catch (error) {
            res.json({message: error.message})
        }
    
}

export const getUserByid = async(req, res)=>{

    const id = req.params.id

    try {
        const user = await User.findById(id)
        res.json(user)
    } catch (error) {
        res.json({message: error.message})
    }
}


export const editUser = async(req, res)=>{
    const data = req.body;
    const editUser = new User(data)

    try {
        await User.updateOne({_id: req.params.id}, editUser)
        res.json(editUser)
    } catch (error) {
        res.json({message: error.message })
    }
}
export const deleteUser = async(req, res)=>{

    try {
        await User.deleteOne({_id: req.params.id})
        res.json("User deleted")
    } catch (error) {
        console.log(error)
    }

}

