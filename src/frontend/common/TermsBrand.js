import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Paper, 
  Typography, 
  Box,
  Button
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(5, 2),
  },
}))

export function TermsBrand () {
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h" component="h1" gutterBottom>Grapevine Logic, Inc.</Typography>
        <Typography variant="h5" component="h2">CLIENT TERMS OF SERVICE</Typography>
      </Box>
      <Typography variant="body2" component="p" gutterBottom>These Terms of Service (the “Agreement”) are entered into as of today's date (the “Effective Date”) and are a legally binding agreement between you (the “Client”) and Grapevine Logic, Inc. (“Grapevine Logic”, “Grapevine” or the “Company”) (collectively “the Parties”).</Typography>
      <Typography variant="h6" component="h6" gutterBottom>Our Mission</Typography>
      <Typography variant="body2" component="p" gutterBottom>Grapevine helps brands develop and execute marketing strategies by partnering with influential Content Creators (“Creators”) to deliver targeted messaging directly to consumers. The purpose of this Agreement is to set forth the framework in which that happens. By submitting this application you agree to be bound by this Agreement, but recognize that not all applications will be accepted by the Company and that the Company is not bound to provide the Services simply by virtue of your application.</Typography>
      <Typography variant="h6" component="h6" gutterBottom>Agreement Terms and Conditions</Typography>
      <Typography variant="body2" component="ol">
                                <li><Typography variant="subtitle2" component="span">Services.</Typography>&nbsp;During the term of this Agreement, the Company will provide services (“Services”) to the Client in the form of one or more campaigns (each a “Campaign”). In each Campaign, the Company, through its online platform (the “Platform”), will connect the Client with one or more individuals (the “Creators”) to create and publish content on various online platforms (including but not limited to Youtube) highlighting the Client's products or services.  Each Campaign may also include additional services such as campaign planning and design.  The scope (and cost) of each Campaign shall be determined as set forth below.</li>
                                <li><Typography variant="subtitle2" component="span">The Process.</Typography>&nbsp;The Client will create, or will provide the Company with the details to create, a Campaign on the Platform that that sets forth the details of the Campaign. The Campaign shall include a name, description, type of video required, target market, start date, and any other details as may be desired by the Client or required by the Company.  The Client shall also specify the scope of additional Services, if any, to include in the Campaign. From there, the Client may choose to make its Campaign visible to Creators on the Platform, at which point Creators will submit proposals through the Platform, detailing how they would fulfill the needs of the Campaign (each a “Proposal”). </li>
                                <li><Typography variant="subtitle2" component="span">Fees.</Typography>&nbsp;As consideration for the Services to be provided by the Company, the Client will pay to the Company the campaign cost, as determined based upon the requested Campaign Services (“Campaign Cost”), including those fees for each Creator selected and approved by the Client for each Campaign (collectively, the “Fees”). Unless otherwise agreed between the Parties, such Fees will be charged to the Client's Payment Method upon acceptance and approval of a Creator's Proposal, and all Fees will be deemed earned by the Company upon the posting of a video by the Creator in accord with the Proposal. The Client agrees to provide the Company with credit card or ACH information, or at the election of the Company, to deposit an amount of money with the Company (each, a “Payment Method”), prior to incurring any Fees, and specifically authorizes the Company to charge the credit card, run the ACH transaction, or charge against the money on deposit with the Company, in the amount of the Fees when due. The Client further agrees to execute any additional documents necessary to implement this Section, and to provide such information as is necessary to process payments and comply with applicable statutes. In the event of a failure to make payments in accord with this Section 3 by the Client, the Client will be responsible for all losses incurred by the Company as a result thereof, including consequential damages, all costs of any suit to enforce this Agreement, and a reasonable attorney's fee. In the event a Creator fails to post a video for a Campaign in accord with their Proposal, the Campaign Cost for that Creator will be refunded to the Client or applied to another Campaign or Campaign Cost, at the election of the Client.</li>
                                <li><Typography variant="subtitle2" component="span">Expenses.</Typography>&nbsp;The Company will not be authorized to incur any expenses on behalf of the Client, except those expressly specified in a Campaign, and will be responsible for all expenses incurred while performing the Services, unless otherwise agreed to by the Client in writing.</li>
                                <li><Typography variant="subtitle2" component="span">Term and Termination.</Typography>&nbsp;The Company will provide the Services to the Client for a period (the “Term”) as defined in each Campaign. This Agreement will survive each individual Term until terminated by written notice by either Party (the “Termination Notice”). A Termination Notice sent without cause during a Term will be effective at the end of that Term. Should either Party default in the performance of this Agreement or materially breach any of its obligations hereunder, the non-breaching party may provide the breaching party with written notice of the breach or default, and thereafter terminate this Agreement seven (7) days after delivery of that notice if the default or breach is not cured. In the event this Agreement is terminated due to a breach or default by the Client, the Client will forfeit any right to reimbursement of Fees under any Campaign.</li>
                                <li><Typography variant="subtitle2" component="span">Campaign Cancellation, Pausing.</Typography>&nbsp;A Campaign shall automatically be paused upon thirty (30) days of Client inactivity on the Platform. In addition, the Company may pause a Campaign immediately if the Client becomes inactive or fails to respond to the Company.  Upon a pause or cancellation of a Campaign, the Company will be entitled to all payments due as of the date of the pause or cancellation. In the event a Campaign is paused for more than sixty (60) days, that pause will be treated as a cancellation for purposes of this Section. Upon cancellation, there shall be no refund for Fees already paid to Creators and 30% of the Client’s remaining unspent balance shall be non-refundable.</li>
                                <li><Typography variant="subtitle2" component="span">Refund.</Typography>&nbsp;Funds paid to Creators can not be refunded. In addition, 30% of the Client’s initial Campaign Cost is non-refundable. In the event of cancellation, 30% of the total unspent balance shall be non-refundable.  Client must provide at least thirty days notice of an intent to refund monies not spent on Creators.  Refunds (if permitted) shall be processed using the same payment method authorized for payment in Exhibit B, or by check, at the full discretion of the Company.  The Client understands that any unused credits or unspent funds associated with such Client’s account shall expire and become non-refundable after one year of inactivity on the Client account.</li>

                                <li><Typography variant="subtitle2" component="span">Restrictions on Use.</Typography>&nbsp;The Client agrees to make every reasonable effort to prevent unauthorized third-parties from accessing the Platform, and further acknowledges and agrees that it will not:
                                    <ol>
                                        <li>Remove or modify any program markings or any notice of the Company;</li>
                                        <li>Make the Platform or materials resulting from the Services available in any manner to any third-party for use in the third-party's business operations;</li>
                                        <li>Modify, make derivative works of, disassemble, reverse compile, or reverse engineer any part of the Services (the foregoing prohibition includes but is not limited to review of data structures or similar materials produced by programs), or access or use the Services in order to build or support, and/or assist a third-party in building or supporting, products or services competitive to the Company;</li>
                                        <li>Disclose results of any Service or program benchmark tests without the Company's prior written consent, which consent may be withheld in the Company's sole discretion;</li>
                                        <li>License, sell, rent, lease, transfer, assign, distribute, display, host, outsource, disclose, permit timesharing or service bureau use, or otherwise commercially exploit or make the Service or materials available to any third-party other than as expressly permitted under the terms of the Agreement;</li>
                                        <li>Copy, reproduce, distribute, republish, download, display, post or transmit in any form or by any means, including but not limited to electronic, mechanical, photocopying, recording, or other means, the Service; or</li>
                                        <li>Use or permit use of the Platform, including by uploading, emailing, posting, publishing or otherwise transmitting any material, for any purpose that may (a) menace or harass any person or cause damage or injury to any person or property, (b) involve the publication of any material that is false, defamatory, harassing or obscene, (c) violate privacy rights or promote bigotry, racism, hatred or harm, (d) constitute unsolicited bulk e-mail, “junk mail”, “spam” or chain letters; (e) constitute an infringement of intellectual property or other proprietary rights, or (f) otherwise violate applicable laws, ordinances or regulations.</li>
                                    </ol>
                                </li>
                                <li><Typography variant="subtitle2" component="span">Independent Contractor.</Typography>&nbsp;The Client understands and agrees that the Company is acting as an independent contractor in the performance of this Agreement, and nothing herein will be deemed to create an employment or an agency relationship between the Company or any employee or agent of the Company and the Client. This Agreement will not be construed to form a partnership, limited partnership, general partnership, joint venture, agency, employer/employee, or like relationship of any kind. Neither the Client nor the Company will have any power to obligate or bind the other. Further, the Company will be solely responsible for the payment of all foreign, Federal, state and local income taxes, social security taxes, foreign, Federal, state and local unemployment insurance and similar taxes, and all other assessments, taxes, contributions or sums payable with respect to the Company as a result of or in connection with its performance under this Agreement.</li>
                                <li><Typography variant="subtitle2" component="span">Creators.</Typography>&nbsp;The Company and the Creators will be solely responsible for determining the method, details and means of performing the Services upon acceptance by the Client of a Creator's proposal. The Company will, at the Company's own expense, engage the services of the Creators in accord with the Campaign as the Company deems necessary to perform the Services. The Client acknowledges that all Creators will operate as independent contractors, and that the Company does not have editorial control over the content that each Creator creates under this Agreement. The Client further acknowledges that all content created by any Creator will be owned entirely by the Creator and will be entirely within the control of the Creator. As such, the Company makes no warranty or guaranty that any content the Client finds insufficient or inappropriate can or will be removed from any online service once posted.</li>
                                <li><Typography variant="subtitle2" component="span">Confidential Information.</Typography>
                                    <ol>
                                        <li>“Confidential Information” is defined as any data or information that is proprietary to the Company, the Client, or any of the Parties' clients and customers and not generally known to the public, including: (i) plans for products or services; (ii) any technical information, invention, design, process, procedure, improvement, technology, or method; (iii) any computer software, source code, or trade secrets; and (iv) any marketing strategies, financial information, client files, customer information, or business plans. Confidential Information does not need to be eligible for patent, copyright, trademark, or trade secret protection. The Parties acknowledge that all Confidential Information is proprietary and is regarded as a trade secret.</li>
                                        <li>Confidential Information excludes information which: (i) was known by the receiving-Party prior to receiving it under this Agreement; (ii) becomes rightfully known to the receiving-Party from a third-party, confirmed after diligent inquiry by the receiving-Party to be under no duty to maintain the disclosing-Party's Confidential Information; (iii) becomes publicly available through no fault of the receiving-Party; or (iv) has been independently developed by agents of the receiving-Party without breach of this Agreement or access to any Confidential Information.</li>
                                        <li>The receiving-Party agrees: to not disclose any Confidential Information to third-parties except as explicitly authorized; to limit disclosure of any Confidential Information to directors, officers, employees, agents, or representatives of the receiving-Party who have a need to know that Confidential Information in connection with their representation and who have been advised of and agree to abide by the obligations set forth in this Agreement; and, to use reasonable care, and in no event less than the degree of care used to safeguard the receiving-Party's own confidential information, in safeguarding and preventing the disclosure of the Confidential Information.</li>
                                        <li>The receiving-Party agrees to use the Confidential Information solely for the benefit of the disclosing-Party or its clients and customers, and solely in connection with this Agreement. No other use is permitted without prior written consent of the disclosing-Party, no title or ownership of the Confidential Information is transferred to the receiving-Party, and any modifications or improvements of the Confidential Information will be the sole property of the disclosing-Party or its clients and customers, as applicable.</li>
                                        <li>Nothing in this Agreement will be construed to prevent the receiving-Party from disclosing Confidential Information pursuant to an order of a court or other governmental authority of competent jurisdiction, as long as the receiving-Party promptly notifies the disclosing-Party of its intention to disclose and provides reasonable cooperation to the disclosing-Party in any efforts to contest or limit the scope of such order or subpoena.</li>
                                        <li>The Parties acknowledge that the Confidential Information to be disclosed is unique and valuable, that unauthorized disclosure would destroy or diminish its value, and that resulting damages would be impossible to calculate. The Parties therefore agree that the disclosing-Party will be entitled to injunctive relief to prevent disclosure of Confidential Information in breach of this Agreement in addition to all other remedies in law or equity.</li>
                                    </ol>
                                </li>
                                <li><Typography variant="subtitle2" component="span">Intellectual Property.</Typography>&nbsp;The Client understands and agrees that all intellectual property and all intellectual property rights therein, whether in copyright, trademark, patent, trade secret, or otherwise (collectively, “Intellectual Property Rights”), created under this Agreement by the Company or the Creators will remain the property of the Company or the Creators, respectively. For the purposes of this Agreement, Intellectual Property means any and all intellectual property and tangible embodiments thereof, including without limitation inventions, discoveries, designs, specifications, developments, methods, modifications, improvements, processes, know-how, techniques, algorithms, databases, computer software and code, mask works, formulae, techniques, graphics or images, text, audio or visual works, materials that document design or design processes, or that document research or testing, schematics, diagrams, product specifications and other works of authorship.</li>
                                <li><Typography variant="subtitle2" component="span">Non-Solicitation of Creators.</Typography>&nbsp;The Client, including its employees, officers, directors, agents, parents, consultants, and subsidiaries agrees not to solicit, induce, encourage, or participate in soliciting, inducing, or encouraging any Creator to terminate their relationship with the Company. The Client, including its employees, officers, directors, agents, parents, and subsidiaries, further agrees not to hire, employ, or engage in business with or attempt to hire, employ, or engage in business with any Creator who has worked with the Company on a Campaign for the Client within the preceding twelve (12) months, or discuss any potential employment or business association with such person, even if the Client did not initiate the discussion or seek out the contact. The Client acknowledges that any Creator hired by the Client within twelve (12) months of working with the Company on a Campaign for the Client will be required to remit a portion of all amounts received from the Client to the Company, and the Client hereby guarantees payment of that amount.</li>
                                <li><Typography variant="subtitle2" component="span">Warranties.</Typography>
                                    <ol>
                                        <li>The Parties represent that neither their execution of this Agreement nor performance hereunder conflicts with any contractual commitment on their part to any third-party or violates or interferes with any rights of any third-party, and further that each Party holds legal title with right to transfer to all property, including intellectual property, transferred, licensed, or assigned under this Agreement.</li>
                                        <li>The Company warrants that the Services will be performed in all material respects in accordance with each individual Campaign. If the Service provided to the Client for any given Campaign were not performed as warranted, the Client must provide written notice to the Company no later than five (5) business days after the conclusion of that Campaign.</li>
                                        <li>The Company does not guarantee that the Services will be performed error-free or uninterrupted, that the Company will correct all errors, or that content created by any Creator will be error-free or of any particular nature. The Client acknowledges that the Company does not control the transfer of data over communications facilities, including the internet, and that the Services may be subject to limitations, delays, and other problems inherent in the use of such communications facilities. The Company is not responsible for any delays, delivery failures, or other damage resulting from such problems.</li>
                                        <li>To the extent permitted by law, these warranties are exclusive and there are no other express or implied warranties or conditions including for hardware, systems, networks, or environments or for merchantability, satisfactory quality, or fitness for a particular purpose.</li>
                                    </ol>
                                </li>
                                <li><Typography variant="subtitle2" component="span">Indemnification.</Typography>The Client agrees to fully defend, indemnify, and hold the Company (or its agents, successors, assigns, or Creators) harmless, including payment of all costs of defense, any judgment, fines or penalties, and any attorney's fees or other costs imposed by a court, agency, or under a settlement agreement, against liability of any kind arising out of the Client's breach of this Agreement.</li>
                                <li><Typography variant="subtitle2" component="span">Release.</Typography>&nbsp;The Client waives, releases, and holds the Company (plus its agents, assigns, and Creators) harmless from any and all liability or every type arising out of this Agreement or the Client's use of the Service, except liability arising out of the Company's gross negligence or willful misconduct. In any event, to the maximum extent permitted by law, the Company will not be liable for any direct, special, incidental, indirect, punitive, consequential or other damages arising out of this Agreement. Any damages will be limited to the total amount paid by the Client to the Company in the twelve (12) months preceding the alleged negligence or misconduct.</li>
                                <li><Typography variant="subtitle2" component="span">License.</Typography>&nbsp;The Client grants the Company permission to identify it as a client on the Website and in other marketing materials, and link to the Client's own website therefrom, and further grants the Company a worldwide, non-exclusive, perpetual license to use the Client's logo, and any associated trademark, registered or unregistered, in association with that identification.</li>
                                <li><Typography variant="subtitle2" component="span">Terms of Use, Privacy Policy.</Typography>&nbsp;The Client agrees that its use of the Platform in conjunction with the Services will be subject to the Terms of Use of the Platform, which are incorporated herein and made a part hereof.</li>
                                <li><Typography variant="subtitle2" component="span">Force Majeure.</Typography>&nbsp;Neither party will be responsible for failure or delay of performance if caused by: an act of war, hostility, or sabotage; act of God; electrical, internet, or telecommunication outage that is not caused by the obligated party; government restrictions (including the denial or cancellation of any export or other license); other event outside the reasonable control of the obligated party. Both parties will use reasonable efforts to mitigate the effect of a force majeure event. If such event continues for more than thirty (30) days, either party may cancel unperformed Service upon written notice. This section does not excuse either party's obligation to take reasonable steps to follow its normal disaster recovery procedures or obligation to pay for the Service.</li>
                                <li><Typography variant="subtitle2" component="span">Merger.</Typography>&nbsp;This Agreement constitutes the entire agreement between the Parties relative to the subject matter hereof, and supersedes all proposals, written or oral, and all other communications between the parties relating to the subject matter of this Agreement.</li>
                                <li><Typography variant="subtitle2" component="span">Notice.</Typography>&nbsp;Any notice, demand or request required or permitted to be given under this Agreement must be in writing and given by personal delivery, by nationally recognized express courier or by electronic means of communication addressed to the party to be notified at such party's address set forth on the signature page to this Agreement, as subsequently modified by written notice, or if no address is specified on the signature page, at the most recent address set forth in the party's books and records.</li>
                                <li><Typography variant="subtitle2" component="span">Construction.</Typography>&nbsp;This Agreement is the result of negotiations between and has been reviewed by each of the Parties hereto and their respective counsel, if any; accordingly, this Agreement shall be deemed to be the product of all of the Parties hereto, and no ambiguity shall be construed in favor of or against any one of the parties hereto.</li>
                                <li><Typography variant="subtitle2" component="span">Modification and Waiver.</Typography>&nbsp;This Agreement may only be modified by a writing signed by both of the Parties. Any waiver of compliance with the terms of this Agreement must be in writing, and waiver in one instance will not be deemed a waiver in any future instance.</li>

                                <li><Typography variant="subtitle2" component="span">Severability.</Typography>&nbsp;The invalidity, illegality or unenforceability of any provision of this Agreement will in no way affect the validity, legality or enforceability of any other provision.</li>
                                <li><Typography variant="subtitle2" component="span">Successors and Assigns.</Typography>&nbsp;Except as otherwise provided in this Agreement, this Agreement, and the rights and obligations of the Parties hereunder, will be binding upon and inure to the benefit of their respective successors, assigns, heirs, executors, administrators and legal representatives. The Client may not assign any of its rights and obligations under this Agreement without the written consent of the Company. The Company may assign, whether voluntarily or by operation of law, any of its rights and obligations under this Agreement as necessary or advisable in the discretion of the Company.</li>
                                <li><Typography variant="subtitle2" component="span">Governing Law.</Typography>&nbsp;This Agreement and actions taken thereunder shall be governed by, and construed in accordance with, the laws of the Commonwealth of Massachusetts, applied without regard to conflict of law principles, and the Parties agree that the courts of the Commonwealth of Massachusetts will have exclusive jurisdiction in any dispute arising out of this Agreement.</li>
                                <li><Typography variant="subtitle2" component="span">Electronic Signature.</Typography>&nbsp;By submitting your application and by using the Platform you agree to abide by this Agreement and your acceptance constitutes an electronic signature and a consent to the keeping of electronic records within the meaning of 15 U.S.C. 7001 and analogous state statutes. To the extent that you are acting on behalf of a company, you represent and warrant that you have the authority to bind that company.</li>
      </Typography>
      <Box textAlign="center" m={4}>
        <Button variant="contained" size="large" color="primary">
          I accept the terms and conditions
        </Button>
      </Box>
    </Paper>
  )
}