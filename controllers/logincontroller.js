const Login =require('../models/Login');
class logincontroller{

/*  check=(req, res)=>{
    const {email,password}=res.body;
    Login.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("Success")
            }
            else{
                res.json("The password is incorrect")
            }

        }
        else{
            res.json("No record existed")
        }
    })
 } */
    check = async (req, res) => {
        const { email, password } = req.body; // Use req.body instead of res.body
    
        // Validate input
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }
    
        try {
            const user = await Login.findOne({ email: email });
    
            if (user) {
                // Compare the plain text password with the stored password
                if (user.password === password) {
                    res.json({ message: "Success" });
                } else {
                    res.status(401).json({ message: "The password is incorrect" });
                }
            } else {
                res.status(404).json({ message: "No record found" });
            }
        } catch (err) {
            res.status(500).json({ message: "Error processing request", error: err.message });
        }
    };
    
    
 /*
  register=  (req, res, next)=>{
    login.create(req,body)
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
  }
  */
     register=async(req,res)=>{
        try {
            const {name, fathername,email,password}=req.body
         const Newuser=  new Login({
            name, fathername,email,password
         })
         await Newuser.save()
      
         res.status(200).json({success:true,message:"User Created Successfully.", Newuser})
        } catch (error) {
          console.log(error)
        return  res.status(500).json({success:false,message:"Interl server eror"})
        }
      } 
      register1= async (req, res) => {
        try {
            const { email, password } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = new User({ email, password: hashedPassword });
            await user.save();
            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Registration failed' });
        }
    };
    
    login= async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });
            if (!user || !(await bcrypt.compare(password, user.password))) {
                return res.status(400).json({ error: 'Invalid credentials' });
            }
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
            res.json({ token });
        } catch (error) {
            res.status(500).json({ error: 'Login failed' });
        }
    };

}
module.exports=logincontroller;