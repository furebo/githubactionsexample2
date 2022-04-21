import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app.js';

let should = chai.should();
chai.use(chaiHttp);

describe('My welcome message test',()=>{
  
    it('should respond with a welcome message',(done)=>{
        chai.request(app)
        .get('/')
        .end((err,res)=>{
            res.body.should.have.property('message').eql('Welcome to my application');
            
        })
        done()
    })
})

<<<<<<< HEAD
=======
describe('Asking for credentials',()=>{
    before((done)=>{
        done();
    })
    it('should require to enter credentials',(done)=>{
        chai.request(app)
        .get('/api')
        .end((err,res)=>{
            res.body.should.have.property('message').eql('please enter your credentials');
            done();
        })
    })
})
>>>>>>> 8fa0f17 (changed the branch in yml file)
