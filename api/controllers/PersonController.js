/**
 * PersonController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

      getMember: async (req, res) => {

        console.warn('inside controller')
        // let member = await Person.find();

        let member = await sails.sendNativeQuery('MATCH (n:Person) RETURN n LIMIT 5');

        console.log("============================");
        console.log('Member Details',member);
        console.log("============================");


        res.ok({
            data: member
        });
     }

};

