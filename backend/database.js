/*

var mongoose = require ('mongoose');
var url = "mongodb://localhost:27017/mydb";

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://lemonay:Thallapally4@ds151554.mlab.com:51554/melly');

var db = mongoose.connection;

db.once('open', function() {
	
	var meeting = mongoose.Schema({
		startDate: Date, 
		endDate: Date, 
		startTime: String,
		endTime: String,
		Place: String,
		About: String,
	});

var meet = mongoose.model ('meeting', meetingSchema);


});

*/

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/mydb';

class meetInService{
    
    constructor(req, res){
        this.req = req
        this.res = res
    }
    
    insert(meetIn, db, callback){
        db.collection('meet').insertOne({
            "item" : meetIn
        }, function(){
            callback()
        })
    }
    
    addMeetIn(){
        let self = this;
        let meetIn = this.req.body.meetIn;
        try{
            MongoClient.connect(url, function(err, db) {
                assert.equal(null, err);
                self.insert(meetIn db, function(){
                    db.close()
                    return self.res.status(200).json({
                        status : 'success'
                    })
                })
            });
        }

        catch(error){
            return self.res.status(500).json({
                status : 'error',
                error : error
            })
        }
    }
    
    getMeetIn(){
        let self = this;
        try{
            MongoClient.connect(url, function(err, db){
                assert.equal(null, err);
                let meeting = []
                let cursor = db.collection('meet').find();
                
                cursor.each(function(err, doc) {
                    assert.equal(err, null);
                    if (doc != null) {
                        meeting.push(doc)
                    } else {
                        return self.res.status(200).json({
                            status : 'success',
                            data : meeting
                        })
                    }
                });
            });
        }
        catch(error){
            return self.res.status(500).json({
                status : 'error',
                error : error
            })
        }
    }
}
module.exports = meetInService


