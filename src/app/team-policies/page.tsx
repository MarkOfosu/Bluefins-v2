import Link from 'next/link';

export const metadata = {
  title: 'Team Policies | Ghana BlueFins Swim Club',
  description: 'Team policies, code of conduct, and expectations for swimmers at Ghana BlueFins Swim Club.',
}

export default function TeamPoliciesPage() {
  return (
    <main className="bg-white">
      <div className="pt-24 pb-16"> {/* Add padding for fixed navbar */}
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A1738] mb-4">Team Policies</h1>
            <p className="text-xl text-gray-600">
              Guidelines for a positive, safe, and successful swim team experience
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-16">
            <div className="bg-gray-50 rounded-lg p-8 max-w-5xl mx-auto shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold mb-6 text-[#0A1738]">Our Commitment</h2>
              <p className="text-gray-700 mb-6">
                At Ghana BlueFins Swim Club, we are committed to providing a safe, positive, and competitive environment for all our swimmers. Our policies are designed to ensure that everyone understands what is expected of them and to create an atmosphere conducive to both personal and athletic development.
              </p>
              <p className="text-gray-700 mb-6">
                These policies apply to all members of our swim team, including swimmers, coaches, and parents. Adherence to these policies is essential for maintaining the integrity and positive culture of our team.
              </p>
              <p className="text-gray-700">
                By joining the Ghana BlueFins Swim Club, you agree to abide by these policies and understand that violations may result in disciplinary action, including potential suspension or dismissal from the team.
              </p>
            </div>
          </section>

          {/* Main Content */}
          <div className="max-w-5xl mx-auto">
            {/* Conduct and Behavior */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-[#0A1738]">1. Conduct and Behavior</h2>
              
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 text-[#0A1738]">Respect and Sportsmanship</h3>
                  <p className="text-gray-700 mb-4">
                    All team members are expected to demonstrate respect and good sportsmanship at all times:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Treat coaches, teammates, officials, opponents, and pool staff with respect</li>
                    <li>Use appropriate language and tone when communicating with others</li>
                    <li>Show support for teammates during practices and competitions</li>
                    <li>Accept constructive feedback from coaches professionally</li>
                    <li>Win with humility and lose with grace</li>
                    <li>Refrain from negative comments about teammates, opponents, coaches, or officials</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 text-[#0A1738]">Code of Conduct Violations</h3>
                  <p className="text-gray-700 mb-4">
                    The following behaviors are considered violations of our code of conduct and may result in disciplinary action:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Bullying, hazing, or harassment of any kind</li>
                    <li>Discrimination based on race, gender, religion, or any other characteristic</li>
                    <li>Violence or threats of violence</li>
                    <li>Theft or vandalism of property</li>
                    <li>Cheating during competitions</li>
                    <li>Insubordination or disrespect toward coaches or officials</li>
                    <li>Use of social media to disparage teammates, coaches, or the club</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 text-[#0A1738]">No Tolerance Policy</h3>
                  <p className="text-gray-700 mb-4">
                    Ghana BlueFins Swim Club has a zero-tolerance policy for the following:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Use or possession of alcohol, tobacco, or illegal drugs at any team function</li>
                    <li>Being under the influence of alcohol or drugs during team activities</li>
                    <li>Sexual misconduct or inappropriate physical contact</li>
                    <li>Criminal activity of any kind</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    Violations of this no-tolerance policy may result in immediate dismissal from the team.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 text-[#0A1738]">Appropriate Physical Contact</h3>
                  <p className="text-gray-700 mb-4">
                    In a swimming environment, certain types of physical contact may be necessary for instructional purposes. However:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Physical contact should only be instructional and appropriate in nature</li>
                    <li>Coaches will ask for permission before making physical corrections to swimming technique</li>
                    <li>Swimmers should respect each other&rsquo;s personal space</li>
                    <li>Any concerns about inappropriate contact should be reported immediately</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Pool Rules and Safety */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-[#0A1738]">2. Pool Rules and Safety</h2>
              
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 text-[#0A1738]">General Pool Safety</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>No running on the pool deck</li>
                    <li>No diving in shallow areas</li>
                    <li>No horseplay or pushing others into the pool</li>
                    <li>No glass containers in the pool area</li>
                    <li>No food or drinks (except water) on the pool deck</li>
                    <li>Shower before entering the pool</li>
                    <li>Inform coaches of any injuries or health concerns before entering the water</li>
                    <li>Never swim alone – always follow the buddy system</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 text-[#0A1738]">During Practice</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Follow lane etiquette – swim to the right side of the lane</li>
                    <li>Maintain appropriate distance from other swimmers</li>
                    <li>Wait until the previous swimmer has reached a safe distance before starting</li>
                    <li>Do not hang on lane lines</li>
                    <li>Listen to and follow all coach instructions</li>
                    <li>Exit the pool immediately if instructed to do so by a coach or lifeguard</li>
                    <li>Report any unsafe conditions to coaches immediately</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 text-[#0A1738]">Changing Facilities Policy</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>&quot;No Deck Changes&quot; policy – swimmers must use designated changing rooms</li>
                    <li>Maintain privacy and respect others&rsquo; privacy in changing areas</li>
                    <li>No cell phones or recording devices in changing facilities</li>
                    <li>Keep changing areas clean and tidy</li>
                    <li>Younger swimmers should be supervised by same-gender parent/guardian when needed</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 text-[#0A1738]">Emergency Procedures</h3>
                  <p className="text-gray-700 mb-4">
                    In case of emergency:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Exit the pool quickly but calmly</li>
                    <li>Follow coach or lifeguard instructions</li>
                    <li>Assemble at designated meeting points</li>
                    <li>Report any injuries immediately to coaching staff</li>
                    <li>Familiarize yourself with emergency exits and procedures</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Communication and Feedback */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-[#0A1738]">3. Communication and Feedback</h2>
              
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 text-[#0A1738]">Parent-Coach Communication</h3>
                  <p className="text-gray-700 mb-4">
                    Effective communication between parents and coaches is essential:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Coaches are available to discuss swimmer progress by appointment</li>
                    <li>Do not approach coaches during practice sessions or meets</li>
                    <li>Email is the preferred method for initial contact</li>
                    <li>Allow 24-48 hours for coaches to respond to communication</li>
                    <li>Parent-coach meetings should be scheduled outside of practice times</li>
                    <li>Concerns should follow the communication chain: Assistant Coach → Head Coach → Club Administration</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 text-[#0A1738]">Respectful Communication</h3>
                  <p className="text-gray-700 mb-4">
                    All communication should be:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Respectful and professional in tone</li>
                    <li>Solution-oriented rather than purely critical</li>
                    <li>Focused on specific issues rather than generalizations</li>
                    <li>Private when discussing sensitive matters</li>
                    <li>Mindful of appropriate timing</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    Disrespectful communication, including yelling, threatening, or using inappropriate language will not be tolerated.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 text-[#0A1738]">Safe Sport Environment</h3>
                  <p className="text-gray-700 mb-4">
                    Ghana BlueFins is committed to providing a safe environment for all swimmers:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Any concerns about misconduct should be reported immediately</li>
                    <li>The club has designated Safe Sport representatives who can be contacted confidentially</li>
                    <li>We adhere to all national swimming organization guidelines regarding athlete protection</li>
                    <li>Allegations of abuse or misconduct will be taken seriously and investigated promptly</li>
                    <li>Confidentiality will be maintained throughout the reporting process</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    Contact information for Safe Sport representatives: <span className="font-semibold">safesport@ghanabluefins.com</span>
                  </p>
                </div>
              </div>
            </section>

            {/* Other Important Policies */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-[#0A1738]">4. Other Important Policies</h2>
              
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 text-[#0A1738]">Membership Requirements</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>All swimmers must be registered with Ghana Swimming Association</li>
                    <li>Annual membership fees must be paid in full</li>
                    <li>Swimmers must have completed all medical and emergency contact forms</li>
                    <li>Swimmers and parents must sign the code of conduct agreement</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 text-[#0A1738]">Financial Policies</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Monthly dues are to be paid by the 5th of each month</li>
                    <li>A late fee of GHS 50 will be charged for payments received after the 10th</li>
                    <li>Meet fees are separate from monthly dues and will be billed accordingly</li>
                    <li>Families experiencing financial hardship should speak with administration about payment plans</li>
                    <li>No refunds will be issued for missed practices or meets</li>
                    <li>Swimmers with outstanding balances may not be permitted to participate in meets</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 text-[#0A1738]">Equipment and Uniforms</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>All swimmers must have required equipment for their training group</li>
                    <li>Team caps must be worn at all competitions</li>
                    <li>Team suits are required for competitions</li>
                    <li>Lost or damaged team equipment must be replaced promptly</li>
                    <li>Swimmers are responsible for maintaining their equipment</li>
                    <li>Equipment lists will be provided by coaches at the beginning of each season</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 text-[#0A1738]">Parent Volunteer Expectations</h3>
                  <p className="text-gray-700 mb-4">
                    Parental involvement is crucial to our team&rsquo;s success:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Each family is expected to volunteer at a minimum of two meets per season</li>
                    <li>Volunteer positions include timers, officials, meet administration, and hospitality</li>
                    <li>Training will be provided for volunteer positions</li>
                    <li>Families unable to fulfill volunteer obligations may be charged a fee</li>
                    <li>Volunteer hours must be logged in the team management system</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Policy Enforcement */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-[#0A1738]">5. Policy Enforcement</h2>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-[#0A1738]">Disciplinary Process</h3>
                <p className="text-gray-700 mb-4">
                  Violation of team policies will result in the following progressive discipline:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                  <li><span className="font-semibold">Verbal Warning</span>: First-time minor infractions will receive a verbal warning from the coach.</li>
                  <li><span className="font-semibold">Written Warning</span>: Repeated minor infractions or serious first-time violations will receive a written warning with required parent/coach conference.</li>
                  <li><span className="font-semibold">Temporary Suspension</span>: Continued violations or serious misconduct will result in temporary suspension from team activities.</li>
                  <li><span className="font-semibold">Dismissal</span>: Severe violations or continued disregard for team policies may result in permanent dismissal from the team.</li>
                </ol>
                <p className="text-gray-700 mt-4">
                  Note: Some serious violations may skip steps in this process at the discretion of the coaching staff and administration.
                </p>
              </div>
            </section>

            {/* Agreement Section */}
            <section className="mb-16">
              <div className="bg-[#0A1738] text-white p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Acknowledgment of Policies</h2>
                <p className="mb-6">
                  All swimmers and parents are required to sign an acknowledgment form indicating they have read, understand, and agree to abide by these team policies.
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-4">
                  <Link 
                    href="/register"
                    className="bg-[#FFD700] text-[#0A1738] px-6 py-3 rounded-lg font-bold hover:bg-[#e6c200] transition-colors text-center"
                  >
                    Register & Sign Policies
                  </Link>
                  <Link 
                    href="/contact"
                    className="bg-white text-[#0A1738] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors text-center"
                  >
                    Contact Us With Questions
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
} 