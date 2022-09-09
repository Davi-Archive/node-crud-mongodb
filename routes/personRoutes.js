const router = require('express').Router()
const Person = require('../models/Person')




//CREATE- criação
router.post('/', async (req, res) => {

    // req.body
    const { name, salary, approved } = req.body;

    const person = {
        name,
        salary,
        approved
    }

    if (!name || !salary || !approved) {
        res.status(422).json({ error: 'O nome é obrigatório' })
    } else {

        try {
            //criando dados
            await Person.create(person)

            res.status(201).json({ msg: 'incluido com sucesso' })
            console.log('pessoa criada com sucesso')
            return

        } catch (error) {
            res.status(500)
            console.log(error)
        }
    }
})

//Read - leitura

router.get('/', async (req, res) => {
    try {
        const people = await Person.find()
        res.status(200).json(people)
    } catch (error) {
        res.status(500).json({ "error": error })
    }
})

router.get('/:id', async (req, res) => {
    //extrair dado da requisição, pela URL = req.params
    const id = req.params.id;
    try {
        const personFind = await Person.findOne({ _id: id })
        if (!personFind) {
            res.status(422).json({ msg: 'O usuário não foi encontrado' })
            return
        }
        res.status(200).json(personFind)


    } catch {
        res.status(422).json({ msg: 'O usuário não foi encontrado' })
    }
})

//Update -- atualiza dados (put , Patch)

router.patch('/:id', async (req, res) => {
    const id = req.params.id
    const { name, salary, approved } = req.body
    const person = {
        name,
        salary,
        approved
    }


    try {

        const updatePerson = await Person.findByIdAndUpdate({ _id: id }, person)
        const { _id } = updatePerson;
        res.status(200).json(await Person.findById(_id))


    } catch (error) {
        res.status(422).json({ msg: 'O usuário não foi encontrado' })
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    const personFind = Person.findById({ _id: id })
    if (!personFind) {
        res.status(422).json({ "msg": 'não Encontrado' });
        return
    } else {
        const deletedPerson = await Person.deleteOne({ _id: id })
        if(deletedPerson.deletedCount === 0){
            res.status(422).json({ msg: 'O usuário não foi encontrado' })
            return
        }else{
            res.status(200).json({ message: "O usuário foi deletado" })
        }
    }
})


module.exports = router