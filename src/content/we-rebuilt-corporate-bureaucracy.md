# We Rebuilt Corporate Bureaucracy Out of Tokens

### AI agents can make individual tasks dramatically faster while making the overall system more expensive. DevOps learned this lesson decades ago: optimize the constraint, not the activity.

Somehow, in our rush to replace corporate bureaucracy with AI, we have begun rebuilding corporate bureaucracy—with AI.

I spent a large part of my career working in DevOps. Across hundreds of pipeline implementations and enterprise transformations, I kept encountering the same problem wearing different clothes.

A system wasn't slow because every component of the system was slow.

It was slow because **something was constraining the flow of work through the system**.

Find it.

Fix it.

Then look again, because the bottleneck probably moved.

Repeat.

That's an oversimplification of DevOps, obviously. But at the systems-thinking level, it gets surprisingly close to the heart of the job.

It also gives us a useful framework for thinking about the explosion of AI agents happening right now.

Because I think we're in danger of confusing three very different things:

**Agent productivity.**

**System throughput.**

**Business value.**

They are not interchangeable.

And optimizing one can actually make the others worse.

---

## We've Seen This Movie Before

DevOps owes a substantial intellectual debt to Lean manufacturing and Eliyahu Goldratt's Theory of Constraints.

The fundamental insight is almost painfully obvious once you see it: the output of a system is determined by its constraints.

If one machine in a factory can process ten widgets per hour, making the machine immediately before it capable of producing one thousand widgets per hour does not give you a factory that produces one thousand finished widgets.

It gives you a factory that produces ten finished widgets and an increasingly enormous pile of unfinished inventory.

DevOps brought that same thinking to software.

Gene Kim's *The Phoenix Project* describes improvements made away from a bottleneck as largely illusory: improving upstream capacity simply causes additional inventory to accumulate at the constraint.

Software inventory is just harder to see.

It looks like tickets.

Branches.

Pull requests.

Work waiting for QA.

Security reviews.

Architecture reviews.

Unfinished projects.

Deployment queues.

The objective was never to make developers type faster.

The objective was to improve the flow of value from an idea to a customer.

That distinction matters enormously now.

Because we just gave developers machines capable of typing **very, very fast**.

---

## The $5,000 Meeting About a Blue Button

One reason people enjoyed bringing me into large technical transformations was that I had very little sentimental attachment to existing process.

Enterprise processes accumulate.

A production incident creates an approval.

An audit creates a control.

A VP creates a committee.

Another department wants representation on that committee.

Someone creates a spreadsheet to prepare for the committee.

Eventually there is a meeting before the meeting.

Every individual addition can have a perfectly reasonable explanation.

The resulting system can still be completely insane.

I have watched rooms full of extremely expensive people spend time adjudicating decisions wildly beneath the level at which their judgment actually created value.

Do we really need a steering committee of senior IT leadership involved in deciding whether a button complies with the corporate color palette?

Apparently, sometimes we do.

I've seen it.

This is not an argument against governance.

Security matters.

Architecture matters.

Product management matters.

Compliance matters.

Controls exist because organizations have real risks.

But every control also has a cost.

The question mature organizations eventually learn to ask is:

**Does the marginal value of this control exceed the friction it adds to the system?**

For human organizations, that friction was usually expressed in salaries, meetings, queues and lead time.

For agentic organizations, we're about to express a lot of it in tokens.

---

## We Rebuilt the Org Chart Out of Tokens

Look at some of the increasingly elaborate agent architectures being proposed today.

There is a developer agent.

A reviewer agent.

A product-management agent.

A security agent.

An architecture agent.

A governance agent.

Perhaps a manager agent coordinating them.

Perhaps another agent evaluating whether the manager agent appropriately coordinated the other agents.

The diagram looks wonderfully sophisticated.

Then you inspect the actual execution trace.

The developer agent builds something.

The product agent rejects it.

The developer rewrites it.

The architecture agent objects.

The developer rewrites it again.

The security agent discovers something everyone could have known before implementation began.

Another cycle starts.

We've automated the org chart.

Worse, we've automated some of its worst behaviors.

And unlike the corporate meeting where everyone is salaried whether the meeting happens or not, **the meter is running during every one of these conversations.**

Anthropic has published unusually candid data about this problem.

In its engineering write-up on its multi-agent Research system, Anthropic reported that ordinary agents used roughly four times as many tokens as normal chat interactions, while its multi-agent systems used roughly **15 times as many tokens**. Anthropic's conclusion wasn't that multi-agent systems are bad. In fact, they performed extremely well on the right problems.

The conclusion was economic: the task needs to be valuable enough to justify the additional consumption. Anthropic also noted that tightly coupled work such as many coding tasks may be less suitable for multi-agent approaches than highly parallelizable research.

That distinction is enormously important.

The question isn't:

**Did all of the agents successfully perform their jobs?**

The question is:

**Did the system create enough additional value to justify those jobs existing?**

Those are very different measurements.

---

## Productivity Is Not Throughput

Imagine an ordinary software delivery process:

**Idea → Development → Review → Security → Product → Deployment → Customer**

Suppose development requires five days.

Review takes one day.

Now introduce an extraordinary coding agent and reduce development from five days to twenty minutes.

That's incredible.

But review still takes a day.

You haven't made the entire system hundreds of times faster.

You've moved the constraint.

If you continue optimizing development anyway, you simply create work faster than the rest of the organization can absorb it.

DORA's current research is finding exactly this kind of effect.

Its 2025 research describes AI as an **amplifier** of the underlying organizational system: strong organizations can turn AI into greater performance, while dysfunctional systems can have their weaknesses amplified instead.

A subsequent qualitative analysis involving 1,110 Google software engineers found that AI frequently accelerates initial code generation while shifting some of the saved effort into auditing and verification. Faster creation can therefore increase the cognitive burden placed on downstream reviewers.

That is textbook constraint movement.

**Generation ↓**

while

**Verification ↑
Review ↑
Integration ↑
Rework ↑**

This doesn't mean AI failed.

It means the bottleneck moved.

That's what successful optimization does.

The mistake is continuing to spend money optimizing the place where the bottleneck used to be.

---

## Cheap Work Is Not Necessarily Valuable Work

There is another problem.

When something becomes dramatically cheaper to produce, we start producing things we previously would not have bothered producing.

Researchers at METR have been exploring exactly this distinction.

They separate AI productivity into multiple concepts, including improvement on existing tasks, improvement on the new set of tasks people choose after adopting AI, and actual improvement in the **value** of the work produced. Those measurements can diverge substantially.

METR uses a fantastic term for one consequence:

**Cadillac Tasks.**

These are activities that become attractive largely because AI has made them extremely cheap.

Suddenly we can generate another architectural analysis.

Another prototype.

Another implementation.

Another 40-page specification.

Another dashboard.

Another 700 tests.

Another PR.

Another five alternate versions of the same feature.

Technically, productivity is exploding.

But there is a question hiding underneath all of that activity:

**Did any of this need to exist?**

METR's analysis of thousands of coding-agent transcripts found very large estimated time savings on the tasks where agents were used, while also warning that this can overstate overall productivity because people select tasks where AI is especially useful—and undertake lower-value work they might never have done before.

The ability to cheaply produce an artifact does not establish that the artifact creates value.

That's going to be one of the defining management problems of the agentic era.

---

## Governance Isn't the Problem. Late Governance Is.

None of this means we should unleash autonomous agents into production environments and hope for the best.

The opposite.

Governance becomes more important as the cost of action approaches zero.

But governance should increasingly operate as a **constraint available at the point of execution**, rather than a bureaucracy waiting downstream.

If the security agent already knows that a particular authentication pattern is prohibited, why should the development agent discover that after writing the application?

If architectural rules are deterministic, why should we wait for an architecture-review agent to reject the implementation?

If product acceptance criteria exist, why aren't they available before execution begins?

The goal should increasingly be:

**policy before execution, automated validation during execution, judgment by exception.**

Security rules belong in context.

Architecture standards belong in context.

Acceptance criteria belong in context.

Deterministic checks should be deterministic.

Permissions should be enforced by the platform.

Expensive reasoning—and expensive humans—should be reserved for situations where judgment actually adds value.

DORA is already recommending a similar shift in AI-assisted software delivery: move automated feedback toward the author, work in smaller batches and reconsider downstream quality gates when faster feedback can prevent rework earlier.

That's not less governance.

It's better governance.

DevOps people have a name for much of this philosophy already:

**shift left.**

---

## Start Measuring Cost Per Accepted Outcome

We're going to need better economics around agents.

Because tokens alone aren't enough.

A recent McKinsey analysis of agentic workflow economics argues that token costs can be a minority of the actual variable expense of running some enterprise agents. In the workflows it modeled, human oversight could represent roughly **70–75% of variable costs**.

So the useful unit of measurement isn't:

**cost per token.**

Or:

**tokens per developer.**

Or:

**tasks completed per agent.**

It's something closer to:

### Cost Per Accepted Outcome

**Cost per Accepted Outcome =**

*(Model Cost + Tool Cost + Human Review + Agent Review + Rework + Infrastructure)*

divided by

*Accepted Business Outcomes*

I'd want to know:

* How long did intent-to-production actually take?
* What percentage of generated work survived first review?
* How many agent cycles were required?
* How much human review was necessary?
* How much rework occurred?
* What was the fully loaded cost of the accepted result?
* And, most importantly, did the result create anything the business actually cares about?

DORA has started pushing organizations in exactly this direction. In response to the emerging practice of “tokenmaxxing”—treating AI consumption itself as evidence of productivity—it recommends sticking with outcome measurements and supplementing them with measures such as **cost per accepted change** and **rework rate**.

Because once token usage becomes the KPI, we'll optimize token usage.

That's what organizations do.

And we'll have invented the AI equivalent of measuring programmer productivity by lines of code.

---

## The Agent Productivity Trap

There is an extraordinary amount of real productivity being created by AI agents.

I'm not skeptical about that.

I'm wildly optimistic about it.

But that makes disciplined systems thinking **more important**, not less.

When producing work was expensive, organizations were forced to ration production.

When producing work becomes cheap, the constraint moves somewhere else.

Review.

Judgment.

Integration.

Trust.

Distribution.

Customer attention.

Capital.

Decision-making.

Something will remain scarce.

Our job is to find it.

The great mistake of the agentic era will be **confusing the increasing productivity of an individual agent with increasing throughput of the system—and confusing both with value to the business.**

Faster agents aren't the objective.

More agents aren't the objective.

More tokens aren't the objective.

More artifacts aren't the objective.

**Value reaching the customer is the objective.**

Find whatever prevents that value from moving faster, cheaper and more reliably.

Fix it.

Then look again.

The constraint will have moved.

We've done this before.
