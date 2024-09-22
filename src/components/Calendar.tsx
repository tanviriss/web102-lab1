import Event from "./Events";

const Calendar: React.FC = (): JSX.Element => {
  return(
    <div className="Calendar">
  <table>
    <thead>
      <tr>
        <th></th>
        <th>Sunday</th>
        <th>Monday</th>
        <th>Tuesday</th>
        <th>Wednesday</th>
        <th>Thursday</th>
        <th>Friday</th>
        <th>Saturday</th>
      </tr>
  </thead>
  <tbody>
      <tr>
        <td className="time">8 am</td>
        <Event event="Reach Harvard" color="green" location="Boston Massa"/>
        <Event event="Hack" color="green" />
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td className="time">9 am</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td className="time">10 am</td>
        <Event event="Breakfast" color="pink" />
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td className="time">11 am</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td className="time">12 pm</td>
        <Event event="Start Hacking" color="pink" />
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td className="time">1 pm</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td className="time">2 pm</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td className="time">3 pm</td>
        <Event event="Workshop 1" color="blue" />
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td className="time">4 pm</td>
        <td></td>
        <Event event="Nap" color="blue" />
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td className="time">5 pm</td>
        <Event event="Break" color="blue" />
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Calendar;

