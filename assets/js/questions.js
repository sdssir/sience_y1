(function () {
  const topicNames = {
    2: 'Science Room Rules',
    3: 'Living and Non-Living Things',
    4: 'Humans and Senses',
    5: 'Animals',
    6: 'Plants',
    7: 'Magnets'
  };

  const q = (id, topic, question, choices, explanation, image = null, imageAlt = '') => ({
    id, topic, topicName: topicNames[topic], question, choices, explanation, image, imageAlt
  });
  const c = (text, correct, feedback) => ({ text, correct, feedback });

  const MEDIUM = [
    q('M01', 2, 'What should you do before entering the Science Room?', [
      c('Ask the teacher for permission', true, 'Correct. Pupils should ask the teacher for permission before entering the Science Room.'),
      c('Run in quickly', false, 'Running is not allowed in the Science Room because it can cause accidents.'),
      c('Bring food inside', false, 'Eating and drinking are not allowed in the Science Room.'),
      c('Enter without anyone knowing', false, 'Pupils should not enter without the teacher\'s permission.')
    ], 'Following the entry rule helps keep Science Room activities safe and organised.'),

    q('M02', 2, 'Which action follows the Science Room rules?', [
      c('Queue before entering', true, 'Correct. The textbook states that pupils should queue before entering the Science Room.'),
      c('Play chase between the tables', false, 'Playing and running in the Science Room are not allowed.'),
      c('Drink juice during an activity', false, 'Eating and drinking in the Science Room are not allowed.'),
      c('Throw rubbish into the sink', false, 'Rubbish can block the sink and make the room unsafe.')
    ], 'Good Science Room behaviour includes queuing, asking permission, keeping the room tidy, and avoiding unsafe actions.'),

    q('M03', 2, 'A pupil finishes an activity. What should happen before leaving the Science Room?', [
      c('Clean and tidy the Science Room', true, 'Correct. Pupils should clean and tidy the Science Room before leaving.'),
      c('Leave everything on the table', false, 'Leaving the room untidy does not follow the Science Room rules.'),
      c('Start running to the door', false, 'Running is not allowed in the Science Room.'),
      c('Hide the rubbish under a chair', false, 'The room should be cleaned and kept tidy, not made dirty.')
    ], 'A clean and tidy Science Room is safer and allows learning to continue effectively.'),

    q('M04', 2, 'What may happen if rubbish is thrown into the Science Room sink?', [
      c('The sink may become blocked', true, 'Correct. The textbook explains that rubbish can cause the sink to become blocked.'),
      c('The sink becomes a magnet', false, 'Rubbish does not turn the sink into a magnet.'),
      c('The room becomes brighter', false, 'Throwing rubbish into the sink does not make the room brighter.'),
      c('The water becomes food', false, 'Rubbish in the sink does not turn water into food.')
    ], 'Rubbish should be put in the proper place so the Science Room stays clean and safe.'),

    q('M05', 2, 'Why is running inside the Science Room unsafe?', [
      c('Someone may get hurt', true, 'Correct. Playing or running in the Science Room can cause injuries.'),
      c('It makes plants grow faster', false, 'Running does not help plants grow.'),
      c('It makes magnets weaker', false, 'Running does not change magnet strength.'),
      c('It improves hearing', false, 'Running does not improve the sense of hearing.')
    ], 'Science Room rules are designed to prevent danger and help pupils learn safely.'),

    q('M06', 2, 'Look at the picture. Which Science Room rule is being broken?', [
      c('Do not eat or drink in the Science Room', true, 'Correct. The picture shows a pupil eating at a Science Room table.'),
      c('Queue before entering', false, 'The problem shown is eating, not queuing.'),
      c('Ask permission before entering', false, 'The picture does not show a pupil entering the room.'),
      c('Clean the room before leaving', false, 'The picture focuses on eating during Science Room time.')
    ], 'Food and drinks should stay outside the Science Room.', 'assets/questions/science-room-eating.svg', 'A pupil eating at a Science Room table'),

    q('M07', 3, 'Which one is a living thing?', [
      c('A tree', true, 'Correct. A tree is a living thing.'),
      c('A stone', false, 'A stone is a non-living thing.'),
      c('A toy car', false, 'A toy car is a non-living thing even if it can move when pushed.'),
      c('A bench', false, 'A bench is a non-living thing.')
    ], 'Living things have all the living characteristics, such as breathing, needing water and food, moving, reproducing, and growing.'),

    q('M08', 3, 'Which list contains the characteristics of living things taught in the textbook?', [
      c('Breathe, need water and food, move, reproduce, grow', true, 'Correct. These are the five living characteristics listed in the textbook.'),
      c('Shine, ring, roll, melt, freeze', false, 'Those are not the five characteristics used to identify living things in this unit.'),
      c('Fly, swim, jump, sing, sleep', false, 'Not all living things do all of these actions.'),
      c('Hard, soft, rough, smooth, round', false, 'Those are object properties, not the five living characteristics.')
    ], 'A living thing must show all the characteristics used in this unit.'),

    q('M09', 3, 'A bird and an aeroplane can both move. Why is the bird living but the aeroplane non-living?', [
      c('The bird also breathes, needs water and food, reproduces, and grows', true, 'Correct. Movement alone is not enough; the bird also has the other living characteristics.'),
      c('The aeroplane is larger', false, 'Size does not decide whether something is living.'),
      c('The bird can be seen', false, 'Both a bird and an aeroplane can be seen.'),
      c('The aeroplane has wings', false, 'Having wing-like parts does not make something living.')
    ], 'To classify something as living, look for the full set of living characteristics, not just movement.'),

    q('M10', 3, 'Why do humans and animals need food?', [
      c('For energy and growth', true, 'Correct. The textbook says food gives energy and also helps humans and animals grow.'),
      c('To become magnets', false, 'Food does not make humans or animals magnetic.'),
      c('To change their sense organs', false, 'Food is not used to change sense organs.'),
      c('To make plastic', false, 'Food is not needed to make plastic.')
    ], 'Food is a basic need because it supplies energy and supports growth.'),

    q('M11', 3, 'Why do humans and animals need shelter?', [
      c('To protect themselves from rain, heat, and danger', true, 'Correct. Shelter protects humans and animals from bad weather and danger.'),
      c('To make their food by sunlight', false, 'The textbook describes plants as making their own food, not humans and animals.'),
      c('To become larger than every other animal', false, 'Shelter does not make an animal the largest.'),
      c('To stop breathing', false, 'Living things need air for breathing; shelter is not used to stop breathing.')
    ], 'Shelter is important because it gives protection from weather and danger.'),

    q('M12', 3, 'In this green bean test, what basic need is different between Cup A and Cup B?', [
      c('Water', true, 'Correct. Cup A has wet tissue while Cup B has dry tissue, so water is the changed condition.'),
      c('Air', false, 'Both cups are open to the surrounding air in the picture.'),
      c('Shelter', false, 'The activity is not comparing shelters.'),
      c('Animal food', false, 'The activity uses green bean seeds, not animals.')
    ], 'The experiment changes the water condition so pupils can observe how water affects the seeds.', 'assets/questions/seed-water-test.svg', 'Two cups of green bean seeds: Cup A has wet tissue and Cup B has dry tissue'),

    q('M13', 3, 'Which order is from smallest to largest?', [
      c('Ant → rabbit → goat → horse', true, 'Correct. This order goes from a very small animal to progressively larger animals.'),
      c('Horse → goat → rabbit → ant', false, 'That order goes from large to small.'),
      c('Rabbit → ant → horse → goat', false, 'The sizes are not arranged from smallest to largest.'),
      c('Goat → horse → ant → rabbit', false, 'The small animals are placed after the large animals.')
    ], 'Living things can be compared and arranged according to size.', 'assets/questions/size-order.svg', 'Ant, rabbit, goat, and horse shown from small to large'),

    q('M14', 4, 'Which sense organ helps you see colour, size, and shape?', [
      c('Eyes', true, 'Correct. Eyes are used for the sense of sight and help us observe colour, size, and shape.'),
      c('Ears', false, 'Ears are used for hearing sounds.'),
      c('Tongue', false, 'The tongue is used for tasting.'),
      c('Skin', false, 'Skin is used for the sense of touch.')
    ], 'The eyes are the sense organs for sight.'),

    q('M15', 4, 'Which sense organ helps you tell whether food is sweet, sour, salty, bitter, or tasteless?', [
      c('Tongue', true, 'Correct. The tongue is the sense organ for taste.'),
      c('Nose', false, 'The nose is mainly used for smell in this unit.'),
      c('Ears', false, 'Ears detect sounds, not tastes.'),
      c('Eyes', false, 'Eyes can see food, but they do not detect its taste.')
    ], 'Taste is detected using the tongue.'),

    q('M16', 4, 'Which sense is most useful for deciding whether an object is rough, smooth, soft, or hard?', [
      c('Touch', true, 'Correct. The skin gives us the sense of touch and helps us feel texture and hardness.'),
      c('Hearing', false, 'Hearing detects sounds.'),
      c('Sight only', false, 'Sight may give clues, but touch is the sense used to feel roughness, smoothness, softness, and hardness.'),
      c('Taste', false, 'Taste is used for flavours, not texture classification in this activity.')
    ], 'Skin helps us observe object properties through touch.'),

    q('M17', 4, 'Which body part is linked to the sense of hearing?', [
      c('Ears', true, 'Correct. Ears are the body parts used for hearing.'),
      c('Eyes', false, 'Eyes are used for sight.'),
      c('Nose', false, 'The nose is used for smell.'),
      c('Tongue', false, 'The tongue is used for taste.')
    ], 'Each sense has a related body part: eyes, ears, nose, tongue, and skin.'),

    q('M18', 4, 'Ciku and apple are grouped together by taste in the textbook. What taste do they share?', [
      c('Sweet', true, 'Correct. The textbook classifies ciku and apple as sweet.'),
      c('Sour', false, 'Orange and kedondong are the sour fruits in the example.'),
      c('Salty', false, 'The fruit table does not classify ciku and apple as salty.'),
      c('Bitter', false, 'The fruit table does not classify them as bitter.')
    ], 'Objects can be classified using information gathered by the senses.'),

    q('M19', 4, 'The room is dark and Linda cannot see. Which other sense can help her find a torch by feeling it?', [
      c('Touch', true, 'Correct. The textbook example shows Linda using touch when she cannot use sight in the dark.'),
      c('Taste', false, 'Tasting objects is not suitable for finding a torch.'),
      c('Smell', false, 'The example uses touch to recognise the object.'),
      c('Hearing only', false, 'A torch does not need to make a sound to be found by touch.')
    ], 'When one sense cannot be used well, another sense may help us observe.'),

    q('M20', 4, 'What can help a person see more clearly when their vision is not working well?', [
      c('Glasses', true, 'Correct. The textbook gives glasses as an aid for sight when vision is unclear.'),
      c('A hearing aid', false, 'A hearing aid supports hearing, not sight.'),
      c('A magnet', false, 'A magnet does not correct vision.'),
      c('A ruler', false, 'A ruler is not a vision aid.')
    ], 'Science can use tools to help a sense that is not functioning well.'),

    q('M21', 5, 'Which body part helps a bird fly?', [
      c('Wings', true, 'Correct. The textbook states that wings help animals such as birds fly.'),
      c('Shell', false, 'A shell is a protective body part on animals such as snails and turtles.'),
      c('Horn', false, 'Horns are used by some animals for defence.'),
      c('Scales', false, 'Scales are a body covering, not the part identified for flying.')
    ], 'Different animal body parts have different functions.'),

    q('M22', 5, 'Which part helps a fish swim?', [
      c('Fins', true, 'Correct. The textbook states that fins help fish swim.'),
      c('Beak', false, 'A beak is a body part found on birds.'),
      c('Horn', false, 'Horns help some animals defend themselves.'),
      c('Antennae', false, 'Antennae are found on animals such as butterflies and dragonflies.')
    ], 'Fins are important for swimming, while the fish tail helps guide direction.'),

    q('M23', 5, 'Which body part helps ducks and frogs swim?', [
      c('Webbed feet', true, 'Correct. The textbook identifies webbed feet as a body part used for swimming.'),
      c('Feathers only', false, 'Feathers are not the body part identified for swimming in this example.'),
      c('Horns', false, 'Horns are used for defence, not swimming.'),
      c('Shells', false, 'Shells are protective structures, not swimming feet.')
    ], 'Webbed feet help animals such as ducks and frogs move in water.'),

    q('M24', 5, 'What is one function of a crocodile\'s hard skin in this unit?', [
      c('To defend itself', true, 'Correct. The textbook states that hard skin helps the crocodile defend itself.'),
      c('To make food', false, 'Animals do not use hard skin to make food.'),
      c('To smell flowers', false, 'Hard skin is not a smell organ.'),
      c('To attract magnets', false, 'The unit does not describe crocodile skin as a magnet-attracting body part.')
    ], 'Animal body parts are important because they help the animal perform useful functions.'),

    q('M25', 5, 'What do a buffalo\'s horns and a rhinoceros\' horn help them do?', [
      c('Defend themselves', true, 'Correct. The textbook says horns and the rhinoceros horn help these animals defend themselves.'),
      c('Fly', false, 'Horns are not used for flying.'),
      c('Taste food', false, 'Horns are not sense organs for taste.'),
      c('Make their own food', false, 'Animals do not use horns to make food.')
    ], 'Different animals can have different protective body parts that serve a similar function.'),

    q('M26', 5, 'Cows, cats, hamsters, and rabbits are different animals. What similar body covering is highlighted in the textbook?', [
      c('Fine fur', true, 'Correct. The textbook uses these animals as examples of different animals that all have fine fur.'),
      c('Scales', false, 'The example does not describe all four animals as having scales.'),
      c('Shells', false, 'These animals do not share shells in the textbook example.'),
      c('Feathers', false, 'Feathers are associated with birds, not all four animals.')
    ], 'Different animals may still share similar body parts or body coverings.'),

    q('M27', 5, 'Look at the picture. Which statement matches the animal body parts?', [
      c('The fish has fins; the bird has wings', true, 'Correct. Fins are shown on the fish and wings on the bird.'),
      c('The fish has wings; the bird has fins', false, 'The body parts have been swapped.'),
      c('Both animals have horns', false, 'Neither animal in the picture is shown with horns.'),
      c('Both animals have shells', false, 'The picture does not show shells on the fish or bird.')
    ], 'Animal body parts can be compared to identify similarities and differences.', 'assets/questions/animal-parts.svg', 'Simple drawings of a fish and a bird'),

    q('M28', 6, 'Which four main plant parts are taught in this unit?', [
      c('Flower, leaf, stem, root', true, 'Correct. These are the four plant parts highlighted in the textbook.'),
      c('Wing, fin, horn, shell', false, 'Those are animal body parts.'),
      c('Eye, ear, nose, tongue', false, 'Those are human sense organs.'),
      c('Bar, ring, button, cylinder', false, 'Those are magnet shapes.')
    ], 'The main plant parts in this unit are flower, leaf, stem, and root.'),

    q('M29', 6, 'What can a flower become?', [
      c('Fruit and seeds', true, 'Correct. The textbook says the flower is a reproductive part that can become fruit and seeds.'),
      c('A magnet', false, 'A flower does not become a magnet.'),
      c('A fin', false, 'A fin is an animal body part.'),
      c('A hearing aid', false, 'A hearing aid is a device, not a plant part.')
    ], 'Flowers are important in plant reproduction because they can develop into fruit and seeds.'),

    q('M30', 6, 'Which plant part is used to make food?', [
      c('Leaf', true, 'Correct. The textbook identifies the leaf as the plant part used to make food.'),
      c('Root', false, 'Roots mainly support the plant and absorb water and nutrients from soil.'),
      c('Flower only', false, 'The flower is identified as the reproductive part.'),
      c('Fruit only', false, 'The unit identifies leaves as the part used to make food.')
    ], 'Leaves make food that can be used by other parts of the plant.'),

    q('M31', 6, 'Which plant part carries water and nutrients from the roots toward the leaves?', [
      c('Stem', true, 'Correct. The stem transports water and nutrients from the roots to the leaves.'),
      c('Flower', false, 'The flower is mainly linked to reproduction in this unit.'),
      c('Seed', false, 'The seed is not identified as the transport part.'),
      c('Petal', false, 'The textbook identifies the stem as the transport part.')
    ], 'The stem moves materials around the plant, including water, nutrients, and food.'),

    q('M32', 6, 'Which pair describes root functions?', [
      c('Supports the plant and absorbs water and nutrients', true, 'Correct. These are the two root functions stated in the textbook.'),
      c('Hears sounds and tastes food', false, 'Those are human sense functions, not root functions.'),
      c('Flies and swims', false, 'Those are movement functions of some animal body parts.'),
      c('Attracts and repels magnets', false, 'Those are magnet actions, not root functions.')
    ], 'Roots help hold the plant and take in water and nutrients from the soil.'),

    q('M33', 6, 'Which root type is shown for a rose plant in the textbook?', [
      c('Taproot', true, 'Correct. The rose is used as an example of a plant with a taproot.'),
      c('Fibrous root', false, 'Pandan is the example given for fibrous roots.'),
      c('Magnetic root', false, 'Magnetic root is not a plant root type in this unit.'),
      c('Webbed root', false, 'Webbed is used for animal feet, not plant roots.')
    ], 'Plants can have different root types, including taproots and fibrous roots.'),

    q('M34', 6, 'Look at the picture. Which description matches the pandan plant?', [
      c('Parallel leaf veins and fibrous roots', true, 'Correct. Pandan is shown with parallel veins and fibrous roots.'),
      c('Netted leaf veins and a taproot', false, 'That combination is shown for the rose example.'),
      c('No leaves and no roots', false, 'The pandan clearly has leaves and roots.'),
      c('Wings and a shell', false, 'Those are animal body parts, not plant features.')
    ], 'Plant features such as vein pattern and root type can be used for comparison.', 'assets/questions/rose-pandan.svg', 'Simplified rose and pandan plants showing leaf veins and roots'),

    q('M35', 7, 'Which object in everyday life may use a magnet to stay closed?', [
      c('Refrigerator door', true, 'Correct. The textbook gives the refrigerator door as an example of magnet use.'),
      c('A glass of water', false, 'The glass is not given as a magnetic closing example.'),
      c('A banana leaf', false, 'A banana leaf does not use a magnet to stay closed.'),
      c('A pencil drawing', false, 'A drawing does not need a magnet to stay closed.')
    ], 'Magnets are useful in everyday objects, including refrigerator doors and some closures.'),

    q('M36', 7, 'Which is one magnet shape named in the textbook?', [
      c('Ring magnet', true, 'Correct. Ring is one of the magnet shapes listed in the textbook.'),
      c('Triangle cloud magnet', false, 'That is not one of the named shapes in the unit.'),
      c('Leaf magnet', false, 'Leaf is not one of the magnet shape names in the list.'),
      c('Fish magnet', false, 'Fish is not one of the magnet shape names in the list.')
    ], 'The unit names bar, cylinder, U-shaped, horseshoe, button, and ring magnets.'),

    q('M37', 7, 'Which object is most suitable for testing whether a magnet can attract it, based on the textbook examples?', [
      c('A screw', true, 'Correct. The textbook shows a magnet holding or attracting a screw.'),
      c('A plastic ruler', false, 'The activity includes plastic objects as examples that are not attracted.'),
      c('An eraser', false, 'The eraser is not an example of an attracted object in the activity.'),
      c('A wooden ice-cream stick', false, 'The wooden stick is not attracted in the magnet test.')
    ], 'Magnets attract some objects, but not all objects.'),

    q('M38', 7, 'What happens when the same magnetic poles are brought close together?', [
      c('They repel', true, 'Correct. The textbook states that the same poles repel.'),
      c('They attract', false, 'Attraction happens when unlike poles are brought together.'),
      c('They turn into water', false, 'Magnetic poles do not turn into water.'),
      c('They stop being magnets', false, 'Bringing the same poles together does not mean they stop being magnets.')
    ], 'Same poles repel; unlike poles attract.'),

    q('M39', 7, 'What happens when different magnetic poles are brought close together?', [
      c('They attract', true, 'Correct. The textbook states that unlike poles attract.'),
      c('They repel', false, 'Repulsion happens with the same poles.'),
      c('They grow', false, 'Magnets do not grow when poles are brought together.'),
      c('They reproduce', false, 'Reproduction is a characteristic of living things, not magnets.')
    ], 'North and South are different poles, so they attract when brought close.'),

    q('M40', 7, 'Magnet A pulls a paper clip from 8 cm away. Magnet B only pulls it from 4 cm away. Which magnet is stronger?', [
      c('Magnet A', true, 'Correct. A stronger magnet can attract a paper clip from a greater distance.'),
      c('Magnet B', false, 'Magnet B only starts pulling from the shorter distance.'),
      c('Both are always exactly equal', false, 'The different attraction distances show different strengths in this test.'),
      c('Neither magnet', false, 'Both magnets attract the clip, but Magnet A does so from farther away.')
    ], 'The textbook explains that a stronger magnet can attract a paper clip from farther away.', 'assets/questions/magnet-strength.svg', 'Two magnets tested with paper clips at 8 cm and 4 cm'),
  ];

  const HARD = [
    q('H01', 2, 'A pupil enters the Science Room without permission and then starts running. Which answer correctly identifies both problems?', [
      c('Entering without permission and running are both against the rules', true, 'Correct. Pupils should ask permission before entering, and running is not allowed.'),
      c('Only entering is wrong; running is allowed', false, 'Running is also against the Science Room rules.'),
      c('Only running is wrong; permission is never needed', false, 'The textbook says pupils should ask the teacher for permission before entering.'),
      c('Neither action is a problem', false, 'Both actions break stated Science Room rules.')
    ], 'Good safety decisions often require checking more than one rule at the same time.'),

    q('H02', 2, 'Which sequence best follows the Science Room rules from arrival to leaving?', [
      c('Queue → ask permission → learn safely → clean and tidy before leaving', true, 'Correct. This sequence follows the rules for entering, behaving safely, and leaving the room tidy.'),
      c('Run in → eat → play → leave the room messy', false, 'Every action in this sequence conflicts with the Science Room rules.'),
      c('Enter alone → throw rubbish in sink → leave', false, 'Permission should be obtained, and rubbish should not be thrown into the sink.'),
      c('Eat first → ask permission later → run out', false, 'Food, entering without permission, and running are all unsuitable.')
    ], 'The rules form a safe routine before, during, and after Science Room activities.'),

    q('H03', 2, 'Rubbish is pushed into the sink, water cannot flow properly, and the room becomes messy. What is the best cause-and-effect statement?', [
      c('Poor Science Room behaviour can make the room dirty, blocked, and unsafe', true, 'Correct. The textbook links rubbish in the sink with blockage and poor behaviour with an unsafe, dirty room.'),
      c('Rubbish improves the sink', false, 'The textbook gives the opposite effect: rubbish may block the sink.'),
      c('A blocked sink makes learning automatically better', false, 'Unsafe and messy conditions can interfere with effective learning.'),
      c('The sink blocks because pupils queued', false, 'Queuing is a correct behaviour and does not cause the blockage.')
    ], 'Rules are important because actions in the Science Room can have real consequences.'),

    q('H04', 2, 'Why can following Science Room rules help learning?', [
      c('A clean, orderly, safe room allows learning to be carried out effectively', true, 'Correct. The textbook links good behaviour with effective learning and a clean, tidy room.'),
      c('It makes every experiment finish instantly', false, 'Rules improve safety and organisation, not the speed of every experiment.'),
      c('It removes the need for a teacher', false, 'The rules include asking the teacher for permission.'),
      c('It allows pupils to play during activities', false, 'Playing is one of the behaviours that is not allowed.')
    ], 'Safety and order support effective learning.'),

    q('H05', 2, 'A pupil is thirsty during a Science Room activity. What is the best choice based on the rules?', [
      c('Wait until outside the Science Room to drink', true, 'Correct. Eating and drinking are not allowed inside the Science Room.'),
      c('Drink beside the experiment', false, 'Drinking inside the Science Room is against the stated rule.'),
      c('Hide the drink under the table and drink', false, 'Hiding the action does not make it safe or acceptable.'),
      c('Ask a friend to drink for them', false, 'The rule still does not allow eating or drinking inside the Science Room.')
    ], 'A rule still applies even when a pupil has a reason for wanting to do the action.'),

    q('H06', 2, 'Look at the picture. Which action should the pupil change to follow the Science Room rules?', [
      c('Stop eating in the Science Room', true, 'Correct. The pupil is shown eating at a Science Room table, which is not allowed.'),
      c('Start running around the table', false, 'Running would add another unsafe behaviour.'),
      c('Put rubbish into the sink', false, 'That could block the sink and would not solve the problem.'),
      c('Ignore the teacher', false, 'Ignoring instructions would not improve safe behaviour.')
    ], 'When you see a situation, identify the exact behaviour that conflicts with the rule.', 'assets/questions/science-room-eating.svg', 'A pupil eating at a Science Room table'),

    q('H07', 3, 'A toy robot can move when its motor is switched on. Which conclusion is best?', [
      c('It is still non-living because movement alone does not show all living characteristics', true, 'Correct. Living things must have the full set of characteristics, not movement alone.'),
      c('It must be living because it moves', false, 'The textbook compares moving non-living things with living things and shows movement alone is not enough.'),
      c('It is a plant because it needs electricity', false, 'Electricity does not make a toy robot a plant.'),
      c('It is an animal because it has a body', false, 'Having a body shape does not prove something is an animal or living.')
    ], 'To classify a thing as living, check all the required characteristics.'),

    q('H08', 3, 'You observe a mystery organism. It breathes, needs water and food, moves, and grows. What evidence is still needed to complete the textbook checklist?', [
      c('That it reproduces', true, 'Correct. Reproduction is the missing characteristic from the five-item checklist.'),
      c('That it has wheels', false, 'Wheels are not a living characteristic.'),
      c('That it is made of metal', false, 'Being made of metal is not part of the living checklist.'),
      c('That it is larger than a rabbit', false, 'Size does not decide whether something is living.')
    ], 'All five characteristics are used together: breathing, needing water and food, moving, reproducing, and growing.'),

    q('H09', 3, 'Which statement correctly compares how humans/animals and plants get food?', [
      c('Humans and animals obtain food; plants make their own food', true, 'Correct. This is the difference stated in the basic-needs section.'),
      c('Humans make food in their leaves; plants buy food', false, 'Humans do not have leaves, and the textbook states plants make their own food.'),
      c('Animals make food from roots; plants only drink water', false, 'Roots belong to plants, and plants also make food.'),
      c('Plants and animals get food in exactly the same way', false, 'The textbook specifically says their basic needs are met in different ways.')
    ], 'Living things share basic needs, but they may meet those needs in different ways.'),

    q('H10', 3, 'A rabbit has food, water, and air but no safe place to hide from heavy rain and danger. Which basic need is missing?', [
      c('Shelter', true, 'Correct. Shelter protects humans and animals from rain, heat, and danger.'),
      c('Movement', false, 'Movement is a living characteristic, not the missing protective basic need in this situation.'),
      c('Magnetism', false, 'Magnetism is not a basic need of rabbits.'),
      c('Leaf veins', false, 'Leaf veins are plant features, not a rabbit need.')
    ], 'Use the situation clues to match each basic need to its purpose.'),

    q('H11', 3, 'Baby → child → adult is evidence of which living characteristic?', [
      c('Growing', true, 'Correct. The stages show an increase and change from young to adult.'),
      c('Repelling', false, 'Repelling is a magnet action, not a living characteristic.'),
      c('Absorbing', false, 'Absorbing water is discussed for plant roots, not this human life-stage sequence.'),
      c('Classifying', false, 'Classifying is a science skill, not the characteristic shown by the life stages.')
    ], 'Growth can be observed as a living thing changes from a younger stage to an adult stage.'),

    q('H12', 3, 'Look at the two green bean cups. What is the fairest conclusion about the setup before observing the result?', [
      c('The test changes water while keeping the seeds in similar cups', true, 'Correct. Cup A has wet tissue and Cup B has dry tissue, so water is the main changed condition shown.'),
      c('The test proves shelter is unnecessary', false, 'The setup is not designed to compare shelter.'),
      c('The test compares a plant with an animal', false, 'Both cups contain green bean seeds.'),
      c('The test changes the type of seed in each cup', false, 'The picture shows green bean seeds in both cups.')
    ], 'A useful investigation changes one clear condition so its effect can be observed.', 'assets/questions/seed-water-test.svg', 'Two green bean cups with wet and dry tissue'),

    q('H13', 3, 'Which plant order matches the textbook example from smaller to larger?', [
      c('Grass → paddy → banana plant → coconut tree', true, 'Correct. This follows the size ordering shown in the textbook example.'),
      c('Coconut tree → banana plant → paddy → grass', false, 'That order is from larger to smaller.'),
      c('Paddy → coconut tree → grass → banana plant', false, 'The sizes are not arranged in increasing order.'),
      c('Banana plant → grass → coconut tree → paddy', false, 'The order mixes small and large plants.')
    ], 'Size can be used as a basis for arranging living things.'),

    q('H14', 7, 'A teacher wants a name tag to stick without a pin, a pencil box to stay closed, and a screwdriver to hold a screw. What idea connects all three examples?', [
      c('Magnets can be useful in everyday objects', true, 'Correct. The textbook gives magnetic name tags, closures, and a magnetic screwdriver as everyday uses of magnets.'),
      c('All three are living things', false, 'These examples are objects and do not show the full characteristics of living things.'),
      c('All three use roots to absorb water', false, 'Roots are plant parts, not the feature connecting these objects.'),
      c('All three depend on the sense of taste', false, 'Taste is not the common science idea in these examples.')
    ], 'Magnets are used in different ways in daily life, including holding, closing, and attaching objects.'),

    q('H15', 4, 'A fruit cube is identified using its colour, smell, and taste. What does this show?', [
      c('One object can be observed using more than one sense', true, 'Correct. The textbook states that objects can be identified using one or more senses.'),
      c('Only sight should ever be used', false, 'The activity deliberately uses several senses.'),
      c('Taste is the same as hearing', false, 'Taste and hearing are different senses with different organs.'),
      c('Smell tells us an object\'s exact size', false, 'Size is normally observed using sight in this unit.')
    ], 'Combining several senses can provide more information about an object.', 'assets/questions/senses-clues.svg', 'Icons showing sight, smell, taste, and touch clues'),

    q('H16', 4, 'You are blindfolded and must decide whether an object is hard or soft. Which sense gives the most direct evidence?', [
      c('Touch', true, 'Correct. Touch is used to feel hardness and softness.'),
      c('Sight', false, 'Sight is unavailable because you are blindfolded.'),
      c('Hearing', false, 'Sound does not directly tell you whether the object feels hard or soft.'),
      c('Taste', false, 'Tasting unknown objects is not appropriate for this activity.')
    ], 'Choose the sense that directly matches the property you need to observe.'),

    q('H17', 4, 'A class separates clay and sponge from a bell, whistle, and marble because the first group feels softer. Which science idea is being used?', [
      c('Classifying objects using an observed property', true, 'Correct. The objects are grouped according to softness or hardness.'),
      c('Measuring magnet strength', false, 'No magnet strength is being compared.'),
      c('Ordering animals by size', false, 'The activity is about object properties, not animal size.'),
      c('Growing seeds', false, 'No seed growth is involved in this classification.')
    ], 'Classification means grouping objects using similarities or differences in observable properties.'),

    q('H18', 4, 'A pupil says, “The words are blurry, but I can hear the teacher clearly.” Which aid matches the problem?', [
      c('Glasses', true, 'Correct. The problem is unclear vision, and glasses are the visual aid given in the textbook.'),
      c('A hearing aid', false, 'The pupil can already hear clearly, so the difficulty described is not hearing.'),
      c('A magnet', false, 'A magnet does not improve blurred vision.'),
      c('A shell', false, 'A shell is an animal body part, not a vision aid.')
    ], 'Match an aid to the sense that is not working well.'),

    q('H19', 4, 'A pupil can see clearly but has difficulty hearing sounds. Which aid is most suitable?', [
      c('A hearing aid', true, 'Correct. The textbook gives a hearing aid as a device that can support hearing.'),
      c('Glasses', false, 'Glasses help vision, not hearing.'),
      c('A magnifying glass only', false, 'A magnifying glass helps viewing small details, not hearing.'),
      c('A magnet', false, 'A magnet does not support the sense of hearing.')
    ], 'Different aids support different senses.'),

    q('H20', 4, 'Linda is in a dark room. Why is touch a sensible sense to use to find a torch?', [
      c('She can feel the shape and surface even when she cannot see', true, 'Correct. Touch can provide object information when vision cannot be used in darkness.'),
      c('Touch makes the room bright', false, 'Touch does not create light.'),
      c('Touch changes the torch into food', false, 'Touch does not change what the object is.'),
      c('Touch makes sounds louder', false, 'Touch does not make sounds louder.')
    ], 'When one sense is limited by the situation, another sense can provide useful information.'),

    q('H21', 4, 'Look at the fruit clues. Which fruit is both round and sour?', [
      c('Orange', true, 'Correct. The textbook table describes orange as round and sour.'),
      c('Apple', false, 'Apple is round but is classified as sweet.'),
      c('Ciku', false, 'Ciku is sweet and oval.'),
      c('Kedondong', false, 'Kedondong is sour but oval.')
    ], 'A two-clue question requires an option that matches both properties at the same time.', 'assets/questions/fruit-clues.svg', 'Fruit table showing taste and shape of ciku, apple, orange, and kedondong'),

    q('H22', 5, 'A fish must both swim and change direction in water. Which body parts best match these two jobs?', [
      c('Fins for swimming and tail for guiding direction', true, 'Correct. The textbook states that fins help swimming and the tail helps guide direction.'),
      c('Horn for swimming and shell for direction', false, 'Horns and shells do not match these fish functions.'),
      c('Beak for swimming and wings for direction', false, 'Those parts are associated with birds, not the fish functions given.'),
      c('Antennae for swimming and fur for direction', false, 'Those parts do not perform the stated fish functions.')
    ], 'Match each body part to the function specifically stated in the animal unit.'),

    q('H23', 5, 'Which pair of animals is shown in the unit as having a shell?', [
      c('Snail and turtle', true, 'Correct. The textbook labels shells on the snail and turtle.'),
      c('Horse and rhinoceros', false, 'These animals are not shown with shells.'),
      c('Butterfly and dragonfly', false, 'These insects are shown with wings and antennae, not shells.'),
      c('Duck and frog', false, 'These are linked with webbed feet, not shells.')
    ], 'Different animals can share a similar body part even when they are very different animals.'),

    q('H24', 5, 'A buffalo and a rhinoceros use different named body parts for a similar job. Which comparison is correct?', [
      c('Buffalo horn and rhinoceros horn both help defence', true, 'Correct. The textbook shows both body parts helping the animals defend themselves.'),
      c('Buffalo wing and rhinoceros fin both help flight', false, 'Those animals are not described with wings or fins.'),
      c('Buffalo shell and rhinoceros antennae help hearing', false, 'Those body parts and function do not match the animals.'),
      c('Buffalo beak and rhinoceros webbed feet make food', false, 'Those parts are not described for these animals and do not make food.')
    ], 'Different body parts can perform a similar protective function.'),

    q('H25', 5, 'Cows, cats, hamsters, and rabbits all have fine fur. What is the best general statement?', [
      c('Different animals can have a similar body part or covering', true, 'Correct. This is the generalisation highlighted in the textbook.'),
      c('All animals have exactly the same body parts', false, 'Animals can share some parts while still having many differences.'),
      c('Fine fur means the animals are the same species', false, 'Sharing one body covering does not make different animals the same animal.'),
      c('Any animal with fur must be able to fly', false, 'Fine fur is not a flying structure.')
    ], 'Science comparisons can reveal both differences and shared features.'),

    q('H26', 5, 'Look at the fish and bird. Which difference is linked directly to how they move?', [
      c('The fish has fins for swimming; the bird has wings for flying', true, 'Correct. These body parts match the movement functions stated in the unit.'),
      c('The fish has a shell; the bird has a horn', false, 'Those are not the body parts shown for these animals.'),
      c('The fish has fur; the bird has scales', false, 'The body coverings have been mismatched.'),
      c('Both use webbed feet as their main movement part', false, 'The textbook identifies fins for fish and wings for birds in these examples.')
    ], 'Body structures can be compared by asking what job each part helps the animal do.', 'assets/questions/animal-parts.svg', 'Simple drawings of a fish with fins and a bird with wings'),

    q('H27', 5, 'A crocodile is threatened. Which body feature from the unit is most directly linked to defence?', [
      c('Hard skin', true, 'Correct. The textbook states that the crocodile\'s hard skin helps it defend itself.'),
      c('Webbed feet', false, 'Webbed feet are linked to swimming in animals such as frogs and ducks.'),
      c('Fins', false, 'Fins are linked to swimming in fish.'),
      c('Fine fur', false, 'Fine fur is a body covering but is not the defence feature stated for the crocodile.')
    ], 'The function of a body part depends on the animal and the role described in the unit.'),

    q('H28', 5, 'Which statement best compares a bird and a deer using body parts from the unit?', [
      c('A bird has wings and feathers; a deer can have horns and fine fur', true, 'Correct. These are body parts or coverings shown for the animals in the unit.'),
      c('A bird has fins; a deer has a shell', false, 'Those body parts do not match the two animals.'),
      c('A bird has a rhinoceros horn; a deer has wings', false, 'The body parts are assigned to the wrong animals.'),
      c('Both must have the same body parts because both are animals', false, 'Different animals can have different body parts.')
    ], 'Animal classification and comparison depend on observing actual body parts.'),

    q('H29', 6, 'If a plant loses the flowers that would normally develop further, which process from the unit is most directly affected?', [
      c('Formation of fruit and seeds', true, 'Correct. The textbook says flowers are reproductive parts that can become fruit and seeds.'),
      c('Hearing sounds', false, 'Plants are not described with hearing organs in this unit.'),
      c('Magnetic attraction', false, 'Flower loss is not a magnet issue.'),
      c('Growing webbed feet', false, 'Webbed feet are animal body parts.')
    ], 'Understanding a plant part means understanding what job may be affected when that part is missing.'),

    q('H30', 6, 'If a plant stem is badly damaged, which two transport jobs may be affected according to the textbook?', [
      c('Moving food from leaves and moving water/nutrients from roots', true, 'Correct. Both transport jobs are stated functions of the stem.'),
      c('Hearing sounds and tasting food', false, 'Those are human sense functions.'),
      c('Flying and swimming', false, 'Those are animal movement functions.'),
      c('Attracting and repelling magnets', false, 'Those are magnet behaviours.')
    ], 'The stem is a transport pathway between plant parts.'),

    q('H31', 6, 'A plant has weak roots that cannot absorb water well and cannot hold the plant firmly. Which two root functions are affected?', [
      c('Absorption and support', true, 'Correct. Roots absorb water and nutrients and also support the plant.'),
      c('Hearing and seeing', false, 'Those are human sense functions.'),
      c('Flying and defence', false, 'Those are animal body-part functions.'),
      c('Magnet strength and polarity', false, 'Those are magnet concepts, not root functions.')
    ], 'One plant part can have more than one important function.'),

    q('H32', 6, 'Which comparison of rose and pandan is correct?', [
      c('Rose: netted veins and taproot; pandan: parallel veins and fibrous roots', true, 'Correct. These are the paired features shown in the textbook.'),
      c('Rose: parallel veins and fibrous roots; pandan: netted veins and taproot', false, 'The plant features have been reversed.'),
      c('Both have no roots', false, 'Both examples clearly show roots.'),
      c('Both are magnets', false, 'Rose and pandan are plants, not magnets.')
    ], 'Use more than one plant feature when making a careful comparison.', 'assets/questions/rose-pandan.svg', 'Rose with netted veins and taproot; pandan with parallel veins and fibrous roots'),

    q('H33', 6, 'Rose and hibiscus are different plants. Which set of similarities is stated in the textbook comparison?', [
      c('Both flower, have netted veins, woody stems, and taproots', true, 'Correct. The textbook identifies these four shared features for rose and hibiscus.'),
      c('Both have parallel veins, fibrous roots, and no flowers', false, 'That does not match the rose and hibiscus comparison.'),
      c('Both have fins, scales, and tails', false, 'Those are animal body parts.'),
      c('Both have north and south poles', false, 'Those are magnet features, not plant features.')
    ], 'Different plants can share several features at the same time.'),

    q('H34', 6, 'A white flower stem is placed in coloured water overnight. Which plant-part function does this activity most directly help demonstrate?', [
      c('The stem transports water through the plant', true, 'Correct. The textbook activity with a white flower in coloured water is linked to the stem\'s transport role.'),
      c('The flower attracts metal', false, 'The activity is not about magnet attraction.'),
      c('The root hears sound', false, 'Roots are not hearing organs.'),
      c('The leaf becomes an animal', false, 'The activity does not change a leaf into an animal.')
    ], 'The coloured-water activity provides visible evidence of water transport through the stem.'),

    q('H35', 6, 'Look at the labelled plant. Which part both supports the plant from below and absorbs water and nutrients?', [
      c('Roots', true, 'Correct. These are the two functions assigned to roots.'),
      c('Flower', false, 'The flower is mainly the reproductive part in this unit.'),
      c('Leaf', false, 'The leaf is used to make food.'),
      c('Fruit', false, 'The unit does not identify fruit as the part that performs both support and absorption.')
    ], 'Connect a labelled plant part with all of its stated functions.', 'assets/questions/plant-parts.svg', 'A labelled flowering plant showing flower, leaves, stem, and roots'),

    q('H36', 7, 'Paper clips are mixed with powder. What is the simplest method from the magnet unit for separating the paper clips?', [
      c('Use a magnet to attract the paper clips', true, 'Correct. The textbook gives this as a problem-solving use of magnetic attraction.'),
      c('Add more powder', false, 'Adding powder would not separate the paper clips.'),
      c('Use a leaf to make food', false, 'Plant food-making is unrelated to separating paper clips.'),
      c('Put the mixture in a Science Room sink', false, 'That would not be a safe or useful separation method.')
    ], 'Magnetism can be used to solve a practical separation problem.', 'assets/questions/magnet-separate.svg', 'Paper clips mixed with powder in a dish'),

    q('H37', 7, 'Which group contains only objects that are suitable examples of things a magnet can attract in this unit?', [
      c('Screw, pin, metal bottle cap', true, 'Correct. These are metal examples used in the magnet activity and are suitable attracted objects.'),
      c('Wooden stick, plastic ruler, eraser', false, 'These are examples of non-metal objects not attracted in the activity.'),
      c('Marble, plastic button, eraser', false, 'These are not the attracted metal examples used in the activity.'),
      c('Plastic ruler, wooden stick, plastic button', false, 'These plastic/wood items are not the magnet-attracted examples.')
    ], 'Magnet tests compare objects that are attracted with objects that are not.'),

    q('H38', 7, 'In the picture, the facing poles in the middle are S and S. What should happen when the magnets are pushed closer?', [
      c('They repel', true, 'Correct. The same poles repel each other.'),
      c('They attract', false, 'Attraction occurs when different poles face each other.'),
      c('They grow roots', false, 'Roots are plant parts and are unrelated to magnet poles.'),
      c('They become non-living', false, 'Magnets are already non-living objects; pole interaction does not change that classification.')
    ], 'Read the pole labels first, then apply the rule: same poles repel and different poles attract.', 'assets/questions/magnet-poles.svg', 'Two bar magnets with south poles facing each other'),

    q('H39', 7, 'Magnet A attracts a clip when it is 8 cm away. Magnet B must move to 4 cm before the clip moves. What is the best conclusion?', [
      c('Magnet A is stronger in this test', true, 'Correct. The textbook says a stronger magnet can attract a clip from a farther position.'),
      c('Magnet B is stronger because 4 is smaller', false, 'The relevant evidence is attraction from farther away, not simply the smaller number.'),
      c('Both magnets must have identical strength', false, 'Their different attraction distances show different results in the test.'),
      c('Distance cannot tell us anything in this activity', false, 'The textbook explicitly uses attraction distance as evidence of magnet strength.')
    ], 'A fair strength comparison looks at how far away a magnet can still attract the same type of object.', 'assets/questions/magnet-strength.svg', 'Magnet A attracts from 8 cm and Magnet B from 4 cm'),

    q('H40', 7, 'Why are magnets described as bar, cylinder, U-shaped, horseshoe, button, or ring magnets?', [
      c('They are named according to their shapes', true, 'Correct. The textbook explains that magnets are named based on their shapes.'),
      c('They are named by how old they are', false, 'Age is not the basis of these magnet names.'),
      c('They are named by the colour of the room', false, 'Room colour does not determine magnet names.'),
      c('They are named by the animal they attract', false, 'The names listed describe shape, not animals.')
    ], 'Recognising magnet shapes helps identify and compare different magnets.'),
  ];

  window.QUIZ_DATA = {
    title: 'Science Year 1 Challenge',
    topics: topicNames,
    levels: { MEDIUM, HARD }
  };
})();
